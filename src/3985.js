// const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// const L = +n.shift(); // 롤 케익 길이
// const N = +n.shift(); // 방청객 수

// let arr = Array(L).fill(0);
// let largeNum = 0;
// let expected;

// for(const [i,v] of n.entries()){
//   const startNum = +v.split(" ")[0];
//   const endNum = +v.split(" ")[1];

//   if(largeNum < endNum - startNum) {
//     largeNum = endNum - startNum;
//     expected = i+1;
//   }

//   arr = arr.map((v2,i2)=>{
//     if(v2){
//       return v2;
//     } else{
//       if(i2>=startNum-1 && i2<=endNum-1){
//         return i+1;
//       } else return 0;
//     }
//   })
// }

// console.log( expected);

// const nArr = [];

// for(let i=0; i<N; i++){
//   nArr.push(0)
// }

// arr.forEach((v,i)=>{
//   if(v!==0) nArr[v-1] += 1
// })

// let largeNum2 = 0;
// let bigGuy;

// for(const [i,v] of nArr.entries()){
//   if(largeNum2 < v){
//     largeNum2 = v;
//     bigGuy = i+1;
//   }
// }

// console.log(bigGuy);

const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const L = +n.shift(); // 롤 케익 길이
const N = +n.shift(); // 방청객 수

const getMaxNumInArr = (arr) => arr.reduce((a,c)=>a<c?c:a);
const expectedNums = n.map((v)=>v.split(" ")[1]-v.split(" ")[0]+1);
const expectedIdx = expectedNums.indexOf(getMaxNumInArr(expectedNums));
console.log(expectedIdx + 1);

const arr = Array(L).fill(0);

for(const [ni,nv] of n.entries()){
  const startNum = nv.split(" ")[0];
  const endNum = nv.split(" ")[1];
  for(const [ai,av] of arr.entries()){
    if(ai >= startNum - 1 && ai <= endNum - 1){
      if(av === 0){
        arr[ai] = ni + 1;
      }
    }
  }
}

const arr2 = Array(N).fill(0);

for(const ele of arr){
  if(ele !== 0){
    arr2[ele-1] += 1;
  }
}

const actualNums = arr2;
const actualIdx = actualNums.indexOf(getMaxNumInArr(actualNums));
console.log(actualIdx + 1);
