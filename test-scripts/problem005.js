let _correct = 0;
let _failed = 0;
const test = (test) => { if (test) { _correct++; } else { _failed++; }; };
test(strangeSum(1, 2) === 3);
test(strangeSum(1, 1) === 6);
test(strangeSum(1, -1) === 0);
test(strangeSum(1, 1.1) === null);
test(strangeSum(1, 'a') === null);
[_correct, _failed];