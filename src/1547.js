const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

let str = "1";

for(const ele of n){
  const arr = ele.split(" ");
  if(arr[0] !== arr[1]){
    if(arr.includes(str)){
      str = arr.filter(a => a !== str).toString()
    }
  }
}

console.log(str)
