const fs = require('fs');
const {VM} = require('vm2');
 
const vm = new VM({
    timeout: 1000,
    sandbox: {},
    console: 'off'
});

const studentHash = process.argv[2] || '';
const problems = ['problem001', 'problem002', 'problem003'];
let result = [];

for (let problem of problems) {
    let studentScriptPath = './../' + problem + '.js';
    let testScriptPath = './test/' + problem + '.js';
    if (fs.existsSync(studentScriptPath) === false) {
        result.push([problem, 'failed', [0, 0], 'The student\'s script does not exist.']);
        continue;
    }
    if (fs.existsSync(studentScriptPath) === false) {
        result.push([problem, 'failed', [0, 0], 'The test\'s script does not exist.']);
        continue;
    }
    let studentScript = fs.readFileSync(studentScriptPath);
    let testScript = fs.readFileSync(testScriptPath);
    try {
        let testResult = vm.run(studentScript + "\n" + testScript);
        if (testResult[1] > 0) {
            result.push([problem, 'failed', testResult, 'The tests failed.']);
        } else {
            result.push([problem, 'sucess', testResult, 'OK']);
        }
    } catch (exception) {
        result.push([problem, 'failed', [0, 0], exception.toString()]);
    }
}

console.log("Student hash: " + studentHash);
for (let record of result) {
    console.log("Problem: " + record[0] + ", status: " + record[1] + ", tests: [" + record[2][0] + ", "
        + record[2][1] + "], description: " + record[3]);
}

