let Vectors = {
  sum: (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      return false;
    } else if (a.length !== b.length) {
      return false;
    }

    return a.slice().map((_, i) => _ += b[i]);
  },

  mulByScalar: (a, b) => {
    if (!Array.isArray(a) || !Number.isInteger(b)) return false;

    return a.slice().map(_ => _ *= b);
  }
};

console.log(Vectors.mulByScalar([1,1], ""));
