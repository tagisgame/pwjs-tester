let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, isLeapYear(2008) === true);
test(2, isLeapYear(2000) === true);
test(3, isLeapYear(2007) === false);
test(4, isLeapYear(2100) === false);
test(5, isLeapYear(2200) === false);
test(6, isLeapYear(1924) === true); // t
test(7, isLeapYear(1923) === false); // t
[_correct, _failed, _failedTests];