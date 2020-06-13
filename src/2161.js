const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = +n.toString();
const array = Array.from(Array(num),(_,i)=>i+1)
const discard = [];

for(let i=0; i<num-1;i++){
  discard.push(array.shift());
  array.push(array.shift());
}

console.log([...discard, array.shift()].join(" "))
