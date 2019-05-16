function deepFindAndCount (a, b) {
  let bsum = 0;

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      bsum += deepFindAndCount(a[i], b);
    } else {
      bsum += a[i] === b ? 1 : 0;
    }
  }

  return bsum;
}
