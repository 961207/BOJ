const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const K = +n.shift();
let i = K-1;
const N = +n.shift();

let tt = 0;

for(let j=0; j<N; j++){
  const time = +n[j].split(" ")[0];
  const ans = n[j].split(" ")[1];
  tt += time;
  if(tt >= 210){
    console.log(i+1);
    break;
  }
  if(ans === "T"){
    i = (i+1)%8;
  }
}
 
