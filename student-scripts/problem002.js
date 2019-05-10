function stringRotate (a, b){
  //Validating input
  if ((typeof a !== "string") || (typeof b !== "number")) {
    return "";
  }
  else if ((b < 0) || !(Number.isInteger(b))) {
    return "";
  }

  //Word buffers
  var word1 = a;
  var word2 = "";

  for (let i = 0; i < b; i++) {
    //Making 1st letter buffer
    var buf = word1.charAt(0);

    for (let j = 0; j < a.length; j++) {
      word2 += (j+1 < a.length) ? word1.charAt(j+1) : buf;
    }

    word1 = word2;
    word2 = "";
  }
  return word1;
}
