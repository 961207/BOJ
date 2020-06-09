for(let i=1000; i<10000; i++){
  const dec = i.toString();
  const duodec = i.toString(12);
  const oct = i.toString(16);
  let num1 = 0;
  for(const ele of dec){
    num1 += +ele
  }
  let num2 = 0;
  for(const ele of duodec){
    num2 += Number.parseInt(ele,12);
  }
  let num3 = 0;
  for(const ele of oct){
    num3 += Number.parseInt(ele,16);
  }
  if(num1 === num2 && num1 === num3) console.log(i)
}
