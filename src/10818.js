const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();
const ARRAY = n.shift().split(" ").map(v=>+v);
let min = ARRAY[0];
let max = ARRAY[0];


for(let i=0; i<T; i++){
  if(min>ARRAY[i]){
    min = ARRAY[i]
  }
  if(max<ARRAY[i]){
    max = ARRAY[i];
  }
}

console.log(min, max);
