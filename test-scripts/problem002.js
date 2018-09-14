let _correct = 0;
let _failed = 0;
const test = (test) => { if (test) { _correct++; } else { _failed++; }; };
test(stringRotate('UniwersytetŚląski', 0) === 'UniwersytetŚląski');
test(stringRotate('UniwersytetŚląski', 1) === 'niwersytetŚląskiU');
test(stringRotate('UniwersytetŚląski', 2) === 'iwersytetŚląskiUn');
test(stringRotate('UniwersytetŚląski', -1) === '');
test(stringRotate('UniwersytetŚląski', 'a') === '');
[_correct, _failed];