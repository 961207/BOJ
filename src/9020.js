let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);

let T=n.shift();

const getGold = (num) => {
  const arr = Array.from(new Array(num), (v,i)=>v=i+1)
  arr[0]=0;
  for(let i=2; i*i<=num; i++){
    if(arr[i-1]!==0){
      for(let j=i+i; j<=num; j+=i){
        if(arr[j-1] !== i && arr[j-1] % i === 0) arr[j-1]=0;
      }
    }
  }
  const primeArr = arr.filter(v=>v!==0);
  const resultArr=[,]
  for(const ele of primeArr){
    if(ele>num/2) break;
    else {
      const isPrime = num - ele;
      if(primeArr.includes(isPrime)){
        resultArr[0]=ele;
        resultArr[1]=isPrime;
      }
    }
  }
  return resultArr;
}

while(T--){
  const num = n.shift();
  console.log(getGold(num).join(" "));
}
