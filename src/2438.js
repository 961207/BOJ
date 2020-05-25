const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();
const star = "*";

for(let i=0; i<T; i++){
  let str = "";
  for(let j=0; j<i+1;j++){
    str = str + star;
  }
  console.log(str);
}
