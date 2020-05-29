const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();
const NUM = n.shift();

let sum = 0;

for(const ele of NUM){
  sum += +ele;
}

console.log(sum);
