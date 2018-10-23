const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const problems = require('./problems.js');
const fs = require('fs');
const {VM} = require('vm2');
const { crc32 } = require('crc');
const exec = require('sync-exec');
const log = require('simple-node-logger').createSimpleLogger();

const dataPath = "/root/src/data";

const studentsDB = low(new FileSync(dataPath + '/students.json'));
const resultsDB = low(new FileSync(dataPath + '/results.json'));
for (let student of studentsDB.get('students')) {
    log.info('Running a job for the student: ' + student.sha1);
    log.info('Cleaning the student scripts folder');
    exec('rm -rf student-scripts');
    log.info('Cloning the student GIT repository');
    exec('git clone --depth=1 --branch=master ' + student.repo + ' student-scripts');
    exec('rm -rf student-scripts/.git');
    log.info('Testing');
    for (let problem of problems) {
        let studentScriptPath = 'student-scripts/' + problem + '.js';
        let testScriptPath = 'test-scripts/' + problem + '.js';
        resultsDB.get('results').remove({
            student: student.sha1,
            problem: problem,
            status: "failed"
        }).write();
        if (fs.existsSync(studentScriptPath) === false) {
            resultsDB.get('results').push({
                timestamp: + new Date(),
                student: student.sha1,
                problem: problem,
                status: "failed",
                tests: {
                    count: 0,
                    success: 0,
                    failed: 0
                },
                description: 'The student\'s script does not exist.',
                crc: null
            }).write();
            continue;
        }
        let studentScript = fs.readFileSync(studentScriptPath, 'utf8');
        let studentScriptCRC = crc32(studentScript).toString(16);
        if (fs.existsSync(testScriptPath) === false) {
            resultsDB.get('results').push({
                timestamp: + new Date(),
                student: student.sha1,
                problem: problem,
                status: "failed",
                tests: {
                    count: 0,
                    success: 0,
                    failed: 0
                },
                description: 'The test\'s script does not exist.',
                crc: studentScriptCRC
            }).write();
            continue;
        }
        
        let testScript = fs.readFileSync(testScriptPath, 'utf8');
        try {
            let vm = new VM({
                timeout: 1000,
                sandbox: {},
                console: 'off'
            });
            let testResult = vm.run(studentScript + "\n" + testScript);
            if (testResult[1] > 0) {
                resultsDB.get('results').push({
                    timestamp: + new Date(),
                    student: student.sha1,
                    problem: problem,
                    status: "failed",
                    tests: {
                        count: testResult[0] + testResult[1],
                        success: testResult[0],
                        failed: testResult[1]
                    },
                    description: 'The tests failed.',
                    crc: studentScriptCRC
                }).write();
            } else {
                resultsDB.get('results').remove({
                    student: student.sha1,
                    problem: problem,
                    status: "success"
                }).write();
                resultsDB.get('results').push({
                    timestamp: + new Date(),
                    student: student.sha1,
                    problem: problem,
                    status: "success",
                    tests: {
                        count: testResult[0] + testResult[1],
                        success: testResult[0],
                        failed: testResult[1]
                    },
                    description: '',
                    crc: studentScriptCRC
                }).write();
            }
        } catch (exception) {
            resultsDB.get('results').push({
                timestamp: + new Date(),
                student: student.sha1,
                problem: problem,
                status: "failed",
                tests: {
                    count: 0,
                    success: 0,
                    failed: 0
                },
                description: exception.toString(),
                crc: studentScriptCRC
            }).write();
        }
        log.info(problem + ' Done');
    }
}
log.info('Coping results');
exec('cp ' + dataPath + '/results.json ' + dataPath + '/results-final.json');
