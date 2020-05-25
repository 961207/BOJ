const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N, X] = n.shift().split(" ").map(v=>+v)
const ARRAY = n.shift().split(" ");

console.log(ARRAY.filter(v=>v<X).join(" "));
