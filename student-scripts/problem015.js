let Stack = {
  stack: [],
  push: function (a, b = 1) {
    for (let i = 0; i < b - 1; i++){
      this.stack.push(null);
    }
    this.stack.push(a);
  },
  pop: function (a = 1) {
    for (let i = 0; i < a - 1; i++) {
      this.stack.pop()
    }
    return this.stack.pop();
  }
}
