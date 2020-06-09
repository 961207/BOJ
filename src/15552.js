const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

for(const ele of n){
  const num1 = Number(ele.split(" ")[0])
  const num2 = Number(ele.split(" ")[1])
  console.log(num1+num2);
}
