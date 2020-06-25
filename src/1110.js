const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

let str = T;
let a;
const arr = [];

while(true){
  if(+str < 10) {
    a = +str;
    str = "0" + str;
  } else {
    a = +str.charAt(0) + +str.charAt(1);
  }
  if(a < 10) {
    if(str.charAt(1) === "0") {
      str = a.toString();
    } else {
      str = str.charAt(1) + a.toString();
    }
  } else {
    str = str.charAt(1) + a.toString().charAt(1);
  }
  arr.push(str);
  if(str === T) {
    console.log(arr.length);
    break;
  }
}
