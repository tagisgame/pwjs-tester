function stringRotate (a, b){
  //Validating input
  if ((typeof a !== "string") || (typeof b !== "number")) {
    return "";
  }
  else if ((b < 0) || !(Number.isInteger(b))) {
    return "";
  }

  //Final word
  var word = new Array();
  word[0] = a;
  for (let i = 0; i < b; i++) {
    word[i+1] = "";
  }

  for (let i = 0; i < b; i++) {
    //Making 1st letter buffer
    var buf = word[i].charAt(0);

    for (let j = 0; j < a.length; j++) {
      word[i+1] += (j+1 < a.length) ? word[i].charAt(j+1) : buf;
    }
  }
  return word[b];
}
