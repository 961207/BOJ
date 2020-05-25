const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = +n.shift();

for(let i = 1; i < 10; i++){
  console.log(`${num} * ${i} = ${num * i}`);
}
