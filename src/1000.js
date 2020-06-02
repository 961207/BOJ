const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const NUM = n.toString().split(" ");

console.log(+NUM[0] + +NUM[1]);
