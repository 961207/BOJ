const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const arr = n.toString().split(" ");

if(arr[0].split("").reverse().join("")<arr[1].split("").reverse().join("")){
  console.log(arr[1].split("").reverse().join(""));
}
else console.log(arr[0].split("").reverse().join(""));
