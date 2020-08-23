const n = +require("fs").readFileSync("dev/stdin").toString();
for(let i=1; i<=n; i++){
  const blankNum = n-i;
  let blankStr = "";
  for(let j=0; j<blankNum; j++){
    blankStr += " ";
  }
  const starNum = i*2-1;
  let starStr = "";
  for(let j=0; j<starNum; j++){
    if(j%2===0){
      starStr += "*";
    } else {
      starStr += " ";
    }
  }
  console.log(blankStr+starStr);
}
