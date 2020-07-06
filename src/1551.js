const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();
const N = T.split(" ")[0];
const K = T.split(" ")[1];
let arr = n.shift().split(",");

for(let j=0; j<K; j++){
  const arr2 = []
  for(let i=0; i<arr.length-1; i++){
    arr2.push(+arr[i+1] - +arr[i])
  }
  arr = arr2;
}

console.log(arr.toString());
