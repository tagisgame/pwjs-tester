let Square = function (a) {
  this.sideLen = a;
  this.getArea = function () {
    return Math.pow(this.sideLen,2);
  }
  this.getPerimeter = function () {
    return this.sideLen * 4;
  }
}
