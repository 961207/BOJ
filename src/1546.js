const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();
const SCORE = n.shift().split(" ").map(v=>+v);
const MAX = Math.max(...SCORE);
const ARR = [];
let sum = 0;

for(const ele of SCORE){
  const NEW_SCORE = ele/MAX*100;
  ARR.push(NEW_SCORE);
}

for(let i=0; i<ARR.length; i++){
  sum += ARR[i];
}

console.log(sum/T);
