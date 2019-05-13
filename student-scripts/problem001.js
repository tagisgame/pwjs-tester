function triangleArea(a, b, c) {
  //Validating input
  if(!(c < a + b) || !(b < a + c) || !(a < b + c))
    return (-1);
  else if((a < 0) || (b < 0) || (c < 0))
    return (-1);

  //Area = Sqrt(p*(p-a)*(p-b)*(p-c))
  //p = (a+b+c)/2
  let p = (a+b+c)/2;
  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);

  return parseFloat(area);
}
