let[x,y,w,h]=require('fs').readFileSync('dev/stdin').toString().trim().split(" ").map(v=>+v);
console.log([x,w-x,y,h-y].reduce((a,c)=>a<c?a:c));
