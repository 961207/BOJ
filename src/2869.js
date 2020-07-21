const [a,b,v] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v => +v);
console.log(Math.ceil((v-a)/(a-b))+1);
