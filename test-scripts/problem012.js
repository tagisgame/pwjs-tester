let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, JSON.stringify(objectsDiff({x: 1, y: 1, z: 1}, {w: 2, x: 2, z: 2})) === JSON.stringify(['y', 'w']));
test(2, JSON.stringify(objectsDiff({x: 1, y: 1, z: 1}, {})) === JSON.stringify(['x', 'y', 'z']));
test(3, JSON.stringify(objectsDiff({}, {x: 1, y: 1, z: 1})) === JSON.stringify(['x', 'y', 'z']));
test(4, JSON.stringify(objectsDiff({}, {})) === JSON.stringify([]));
[_correct, _failed, _failedTests];