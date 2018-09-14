let _correct = 0;
let _failed = 0;
const test = (test) => { if (test) { _correct++; } else { _failed++; }; };
test(getTotalNumberOfNewYaersEveSundays(2013, 2023) === 2);
test(getTotalNumberOfNewYaersEveSundays(1998, 2188) === 27);
test(getTotalNumberOfNewYaersEveSundays(1998, 2000) === 0);
[_correct, _failed];