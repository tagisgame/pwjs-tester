let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, getTotalNumberOfNewYaersEveSundays(2013, 2023) === 2);
test(2, getTotalNumberOfNewYaersEveSundays(1998, 2188) === 27);
test(3, getTotalNumberOfNewYaersEveSundays(1998, 2000) === 0);
[_correct, _failed, _failedTests];