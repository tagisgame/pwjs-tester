let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
Stack.push(1);
Stack.push(1, 1);
Stack.push(2, 3);
test(1, Stack.pop() === 2);
test(2, Stack.pop() === null);
test(3, Stack.pop(2) === 1);
test(4, Stack.pop(1) === 1);
[_correct, _failed, _failedTests];