function findMax () {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    max = arguments[i] > max ? arguments[i] : max;
  }

  return max;
}
