
function strangeSum (a, b) {
  //Input validation
  if (typeof a !== "number" || typeof b !== "number") {
    return null;
  }
  else if (!(Number.isInteger(a)) || !(Number.isInteger(b))) {
    return null;
  }

  if (a === b) {
    return 3 * (a+b);
  }
  //(else's not needed)
  return (a + b);
}
