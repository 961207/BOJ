const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();
const STAR = "*";
const BLANK = " ";

for(let i=0; i<T; i++){
  let str = "";
  let str2 = "";
  for(let j=0; j<T-i; j++){
    str = str + STAR
  }
  for(let k=0; k<i; k++){
    str2 = str2 + BLANK
  }
  console.log(str2 + str);
}
