const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

console.log(T.charCodeAt());
