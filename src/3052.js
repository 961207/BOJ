const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);
const arr = [];

for(const ele of n){
  arr.push(ele%42);
}

//sol_1

const mySet = new Set(arr);

console.log(mySet.size);

//sol_2

// const arr2 = [];
// for(let i=0; i<arr.length; i++){
//   if(!arr2.includes(arr[i])){
//     arr2.push(arr[i]);
//   }
// }

// console.log(arr2.length);
