// let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);

// let T=n.shift();

// const getGold = (num) => {
//   const arr = Array.from(new Array(num), (v,i)=>v=i+1)
//   arr[0]=0;
//   for(let i=2; i*i<=num; i++){
//     if(arr[i-1]!==0){
//       for(let j=i+i; j<=num; j+=i){
//         if(arr[j-1] !== i && arr[j-1] % i === 0) arr[j-1]=0;
//       }
//     }
//   }
//   const primeArr = arr.filter(v=>v!==0);
//   const resultArr=[,]
//   for(const ele of primeArr){
//     if(ele>num/2) break;
//     else {
//       const isPrime = num - ele;
//       if(primeArr.includes(isPrime)){
//         resultArr[0]=ele;
//         resultArr[1]=isPrime;
//       }
//     }
//   }
//   return resultArr;
// }

// while(T--){
//   const num = n.shift();
//   console.log(getGold(num).join(" "));
// }

const input=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
let output="";

const arr=new Array(10001)
arr[0]=arr[1]=false;

for(let i=2; i<arr.length; i++){
  if(arr[i]===false) continue;
  arr[i]=true;
  for(let j=i*2; j<arr.length; j+=i){
    if(j%i===0) arr[j]=false;
  }
}

const n=input[0];

for(let i=1; i<=n; i++){
  const c=input[i];
  let j,k;
  j=k=c*0.5;
  while(j>0 && !arr[j]) j--
  while(k<c && !arr[k]) k++
  while(j>0&&k<c){
    if(j+k===c) break;
    else if(j+k>c)
      while(j>0&&!arr[--j]);
    else
      while(k<c&&!arr[++k]);
  }
  output+=`${j} ${k}\n`
}

console.log(output);
 
