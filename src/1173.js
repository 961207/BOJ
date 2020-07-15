let [N,m,M,T,R]=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v);

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
