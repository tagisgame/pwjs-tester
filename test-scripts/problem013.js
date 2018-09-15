let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, JSON.stringify(parametricSort([3, 2, 1], 'asc')) === JSON.stringify([1, 2, 3]));
test(2, JSON.stringify(parametricSort([3, 2, 1], 'desc')) === JSON.stringify([3, 2, 1]));
test(3, parametricSort([3, 2, 1], 'desci') === false);
[_correct, _failed, _failedTests];