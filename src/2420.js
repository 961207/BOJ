let[a,b]=require('fs').readFileSync('dev/stdin').toString().trim().split(" ");
console.log(Math.abs(a-b));
