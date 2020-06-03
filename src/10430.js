const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const NUM = n.toString().split(" ");
const A = +NUM[0];
const B = +NUM[1];
const C = +NUM[2];

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);
