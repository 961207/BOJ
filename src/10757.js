let[a,b]=require('fs').readFileSync('dev/stdin').toString().trim().split(" ").map(v=>BigInt(v));
console.log((a+b).toString());
