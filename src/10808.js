let n=require('fs').readFileSync('dev/stdin').toString().split(""),
    p=new Array(26).fill(0);
for(const v of n) p[v.charCodeAt(0)-97]+=1;
console.log(p.join(" "));
