stringRotate("siema", 2);

function stringRotate(a, b){
  //Validating input
  if(b < 0)
    return "";

  for(let i = 0; i < b; i++){
    let buffer = a[0];
    //console.log(buffer, a.length);

    for(let j = 0; j < a.length; j++){
      //console.log(j);
      if(j < a.length)
        a[j] = a[j+1];
      else
        a[j] = buffer;
    }
  }

  console.log(a);
  return word;
}
