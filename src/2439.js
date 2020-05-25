const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();
const STAR = "*";
const BLANK = " ";

for(let i=0; i<T; i++){
  let str = "";
  let str2 = "";
  for(let j=0; j<i+1; j++){
    str = str + STAR;
  }
  for(let k=0; k<T-i-1; k++){
    str2 = str2 + BLANK;
  }
  console.log(str2 + str);
}
