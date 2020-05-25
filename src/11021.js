const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();

for(let i=0; i<T; i++){
  console.log(`Case #${i+1}: ${+n[i].split(" ")[0] + +n[i].split(" ")[1]}`);
}
