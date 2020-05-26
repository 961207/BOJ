const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();
const STAR = "*";

for(let i=0; i<T; i++){
  let str = "";
  for(let j=0; j<T-i; j++){
    str = str + STAR
  }
  console.log(str);
}
