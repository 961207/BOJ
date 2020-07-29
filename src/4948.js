let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);

const getPrime = (num) => {
  const max = num*2;
  const arr = Array.from(new Array(max), (v,i)=>v=i+1);
  arr[0] = 0;
  for(let i=2; i*i<=max; i++){
    if(arr[i-1] !== 0){
      for(let j=i+i; j<=max; j+=i){
        if(arr[j-1] !== i && arr[j-1] % i === 0) arr[j-1] = 0;
      }
    }
  }
  const result = arr.filter(v=>v!==0 && v>num && v<=max);
  return result.length;
}

while(true){
  const num = n.shift();
  if(num === 0) break;
  console.log(getPrime(num));
}
