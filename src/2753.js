const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const year = +n.shift();

if((year%4 == 0 && year%100 != 0)||(year%4 == 0 && year%400 == 0)){
  console.log("1");
}
else{
  console.log("0");
}
