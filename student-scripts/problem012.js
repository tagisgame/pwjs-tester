function objectsDiff(a, b) {
  let differences = [];
  for (let key in a) {
    if(Object.keys(b).indexOf(key) === -1) differences.push(key);
  }
  for (let key in b) {
    if(Object.keys(a).indexOf(key) === -1 && differences.indexOf(key) === -1) {
      differences.push(key);
    }
  }

  return differences;
}
