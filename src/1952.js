const [M,N] =require('fs').readFileSync('dev/stdin').toString().trim().split(" ").map(v=>+v);

const arr = Array(M*N).fill(0)

let idx = -1;
let m = M - 1;
let n = N;
if(M >= 2 && M <= 100 && N >= 2 && N <= 100){
  if(N>=M){
    let sum = 0;
    while(m){
      idx += n;
      arr[idx] = 1;
      idx += m;
      arr[idx] = 1;
      n--;
      m--;
    }
    for(const ele of arr){
      if(ele === 1){
        sum += 1;
      }
    }
    console.log(sum);
  } else{
    let sum = -1;
    while(n){
      idx += n;
      arr[idx] = 1;
      idx += m;
      arr[idx] = 1;
      n--;
      m--;
    }
    for(const ele of arr){
      if(ele === 1){
        sum += 1;
      }
    }
    console.log(sum);
  }
}

// 런타임 에러로 제출하지 못함
