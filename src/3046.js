let[r,s]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ');
console.log(s*2-r);
