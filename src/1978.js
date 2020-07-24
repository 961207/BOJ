let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let N = n.shift();
const arr = n.shift().split(" ").map(v=>+v);
const max = arr.reduce((a,c)=>a>c?a:c);
const dp = [];

const getPrimeNumArr = (n) => {
  for(let i=2; i<=n; i++){
    let isPrimeNum = true;
    for(const ele of dp){
      if(i%ele === 0){
        isPrimeNum = false;
        break;
      }
    }
    if(isPrimeNum) dp.push(i);
  }
}

getPrimeNumArr(max);

const dp2 = [];
for(const ele of arr){
  let isPrimeNum = false;
  for(const v of dp){
    if(ele === v){
      isPrimeNum = true;
      break;
    }
  }
  if(isPrimeNum) dp2.push(ele);
}

console.log(dp2.length);

// 맞았지만 나중에 다시 풀어봐야겠다.
