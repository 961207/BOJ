const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
n.shift();
let str = "";
for(const ele of n){
  const num1 = +ele.split(" ")[0];
  const num2 = +ele.split(" ")[1];
  const sum= num1+num2;
  str += sum + '\n';
}
console.log(str.trim());
