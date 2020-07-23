let N=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let T=N.shift();

const getNum = (k, n) => {
  if(k === 0) return n;
  else {
    k--;
    let sum=0;
    for(let i=1; i<=n; i++){
      sum += getNum(k, i);
    }
    return sum;
  }
}

while(T--){
  const k = +N.shift();
  const n = +N.shift();
  console.log(getNum(k, n))
}
