function compose() {
  if (arguments.length === 0) return x => x;
  let args = Array.prototype.slice.call(arguments);
  let fn = args.pop();
  return x => compose.apply(null, args)(fn(x));
}
let fn1 = compose(x => x*2, x => x + 1, x => x - 5);
console.log(fn1(100)); // 192

let fn = x => (x => x)((x => x * 2)((x => x + 1)(x - 5)))
console.log(fn(100));
