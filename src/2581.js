const[M,N]=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);

const primeArrFrom2 = [];

for(let i=2; i<=N; i++){
  let isPrime = true;
  for(const ele of primeArrFrom2){
    if(i%ele === 0) {
      isPrime = false;
      break;
    }
  }
  if(isPrime) primeArrFrom2.push(i);
}

const primeArr = primeArrFrom2.filter(v=> v>=M && v<=N);

if(primeArr.length === 0) console.log("-1");
else {
  const sum = primeArr.reduce((a,c)=>a+c);
  console.log(`${sum}\n${primeArr[0]}`);
}
