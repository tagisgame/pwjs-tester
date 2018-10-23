let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, carry((a, b) => a - b)(2)(1) === 1);
test(2, carry((a, b) => a * b)(2)(2) === 4);
test(3, carry((a) => a - 1)(2) === 1);
test(4, carry((a, b, c, d) => a + b + c +d)(2)(2)(2)(2) === 8);
[_correct, _failed, _failedTests];