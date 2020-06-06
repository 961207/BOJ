const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const NUM1 = n[0];
const NUM2 = n[1];

console.log(+NUM1 * +NUM2.charAt(2));
console.log(+NUM1 * +NUM2.charAt(1));
console.log(+NUM1 * +NUM2.charAt(0));
console.log(+NUM1 * +NUM2);
