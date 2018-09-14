let _correct = 0;
let _failed = 0;
const test = (test) => { if (test) { _correct++; } else { _failed++; }; };
test(isLeapYear(2008) === true);
test(isLeapYear(2000) === true);
test(isLeapYear(2007) === false);
test(isLeapYear(2100) === false);
test(isLeapYear(2200) === false);
[_correct, _failed];