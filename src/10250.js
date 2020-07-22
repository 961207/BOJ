const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let T = n.shift();

const pad = (z) => {
  return (z < 10 ? "0" : "")
}

const sol = (H,W,N) => {
  const x = Math.floor(N/H);
  const y = N%H;
  if(y === 0) return H+pad(x)+x;
  else return y+pad(x+1)+(x+1);
}

while(T--){
  let [H,W,N] = n.shift().split(" ").map(v=>+v);
  console.log(sol(H,W,N));
}
