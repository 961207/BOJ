const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').shift().split(" ").map(v=>+v);
let N = n[0];
const m = n[1];
const M = n[2];
const T = n[3];
const R = n[4];

let pulse = m;
let time = 0;

while(N){
  if(m + T > M){
    time = -1;
    break;
  }
  else if(pulse + T <= M){
    pulse += T;
    N--;
  }
  else if(pulse + T > M){
    if(pulse - R < m){
      pulse = m;
    } else{
      pulse -= R;
    }
  }
  time++;
}
console.log(time);
