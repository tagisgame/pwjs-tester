const fs = require('fs');
const {VM} = require('vm2');
const { crc32 } = require('crc');

const studentHash = process.argv[2] || '';
const problems = ['problem001', 'problem002', 'problem003', 'problem004', 'problem005'];
let result = [];

for (let problem of problems) {
    let studentScriptPath = './student-scripts/' + problem + '.js';
    let testScriptPath = './test-scripts/' + problem + '.js';
    if (fs.existsSync(studentScriptPath) === false) {
        result.push([problem, 'failed', [0, 0], 'The student\'s script does not exist.', '']);
        continue;
    }
    if (fs.existsSync(studentScriptPath) === false) {
        result.push([problem, 'failed', [0, 0], 'The test\'s script does not exist.', '']);
        continue;
    }
    let studentScript = fs.readFileSync(studentScriptPath, 'utf8');
    let studentScriptCRC = crc32(studentScript).toString(16);
    let testScript = fs.readFileSync(testScriptPath, 'utf8');
    try {
        let vm = new VM({
            timeout: 1000,
            sandbox: {},
            console: 'off'
        });
        let testResult = vm.run(studentScript + "\n" + testScript);
        if (testResult[1] > 0) {
            result.push([problem, 'failed', testResult, 'The tests failed.', studentScriptCRC]);
        } else {
            result.push([problem, 'sucess', testResult, 'OK', studentScriptCRC]);
        }
    } catch (exception) {
        result.push([problem, 'failed', [0, 0], exception.toString(), studentScriptCRC]);
    }
}

console.log("Student hash: " + studentHash);
for (let record of result) {
    console.log("Problem: " + record[0] + ", status: " + record[1] + ", tests: [" + record[2][0] + ", "
        + record[2][1] + "], description: " + record[3] + ", CRC: " + record[4]);
}

