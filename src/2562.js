const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);
let max = 0;
let num = "";

for(let i=0; i<9; i++){
  if(max<n[i]){
    max = n[i];
    num = i+1;
  }
}

console.log(max);
console.log(num);
