let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, reverse((a, b) => a - b)(2, 1) === -1);
test(2, reverse((a, b, c) => c - b - a)(3, 2, 1) === 0);
[_correct, _failed, _failedTests];