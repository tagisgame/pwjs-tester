function reverse(fn) {
  return function () {
    let args = Array.prototype.slice.call(arguments).reverse();
    return fn.apply(null, args);
  };
}
let fn1 = (a, b) => a - b;
let fn2 = reverse(fn1);
console.log(fn1(2, 1)); // 1
console.log(fn2(2, 1)); // -1
