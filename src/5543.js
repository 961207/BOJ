let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);
console.log(n.slice(0,3).reduce((a,c)=>a<c?a:c)+n.slice(3,5).reduce((a,c)=>a<c?a:c)-50);
