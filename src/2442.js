const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();
const STAR = "*";
const BLANK = " ";

for(let i=0; i<T; i++){
  let str = "";
  let str2 = "";
  for(let j=0; j<2*i+1; j++){
    str = str + STAR
  }
  for(let k=0; k<T-1-i; k++){
    str2 = str2 + BLANK
  }
  console.log(str2 + str);
}
