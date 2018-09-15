let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, deepFindAndCount([5, 3, 2, [5, 1], [[5]]], 5) === 3);
test(2, deepFindAndCount([5, 3, 2, [5, 1], [[5]]], 8) === 0);
test(3, deepFindAndCount(['a', 'b', 'c'], 'b') === 1);
test(4, deepFindAndCount([], 'b') === 0);
[_correct, _failed, _failedTests];