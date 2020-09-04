// const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
// for(const ele of n){
//     if(ele === "-1") break;
//     const arr = ele.split(" ").map(Number);
//     let sum = 0;
//     for(const num of arr){
//         if(num === 0) break;
//         if(arr.includes(num*2)) sum++;
//     }
//     console.log(sum);
// }

const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
for(const ele of n){
    if(ele === "-1") break;
    console.log(ele.split(" ").map(Number).filter((v,_,arr)=>v!==0 && arr.includes(v*2)).length)
}
