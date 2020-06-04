const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let T = n.shift();

const arr = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

arr.forEach(element => T = T.replace(element, "1"));

console.log(T.length);
