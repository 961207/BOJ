const[M,N]=require('fs').readFileSync('dev/stdin').toString().trim().split(" ").map(v=>+v);
if(M>N) console.log(">");
else if(M<N) console.log("<");
else console.log("==");
