const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = +n.shift();
let sum = 0;

for(i=1;i<=num;i++){
  sum = sum + i;
}

console.log(sum);
