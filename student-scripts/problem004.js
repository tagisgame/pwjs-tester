function getTotalNumberOfNewYaersEveSundays(a, b){
  var number = 0;
  for(let i = a; i <= b; i++){
    //Variables used to equation
    let y = (i-1) % 100;
    let c = (i-1) - y;
    let g = y + Math.floor(y/4);
    //Equation used to define day of the week for 1st January
    //6 == Sunday
    if(((((Math.floor(c / 100) % 4) * 5) + g) % 7) == 6)
      number++;
  }

  return number;
}
