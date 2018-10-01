let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, maybe((x) => x === 2, (x) => x + 2, 2) === 4);
test(2, maybe((x) => x === 2, (x) => x + 2, 3) === 3);
test(3, maybe((x) => x > 5, (x) => "OK", 3) === 3);
test(4, maybe((x) => x > 5, (x) => "OK", 6) === "OK");
[_correct, _failed, _failedTests];