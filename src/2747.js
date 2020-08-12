let n=+require('fs').readFileSync('dev/stdin').toString();
const arr=new Array(n+1);
for(const [i,v] of arr.entries()){
  if(i===0) arr[i]=0;
  else if(i===1) arr[i]=1;
  else arr[i] = arr[i-1] + arr[i-2];
}
console.log(arr[arr.length-1]);
