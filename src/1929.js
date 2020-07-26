const[M,N]=require('fs').readFileSync('dev/stdin').toString().trim().split(" ").map(v=>+v);

const primeArr = [];

for(let i=2; i<=N; i++){
  let isPrime = true;
  for(const ele of primeArr){
    if(ele <= Math.sqrt(i)){
      if(i%ele === 0){
        isPrime = false;
        break;
      }
    } else break;
  }
  if(isPrime){
    primeArr.push(i);
    if(i>=M && i<=N) console.log(i);
  }
}
