const [a,b,c] = require('fs').readFileSync('dev/stdin').toString().trim().split(" ").map(v=>+v);

const result = (a / (c - b));

if(result === Infinity) console.log(-1);
else if(result < 0) console.log(-1);
else if(Number.isInteger(result)) console.log(result + 1);
else console.log(Math.ceil(result));
