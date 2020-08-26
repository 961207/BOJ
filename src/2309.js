// const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").map(Number);

// (function(){
//   for(let i=0; i<9; i++){
//     const arr1 = n.slice(0,i).concat(n.slice(i+1,9));
//     for(let j=0; j<8; j++){
//       const arr2 = arr1.slice(0,j).concat(arr1.slice(j+1,8));
//       if(arr2.reduce((a,c)=>a+c) === 100){
//         for(const ele of arr2.sort((a,b)=>a-b)){
//           console.log(ele);
//         }
//         return;
//       }
//     }
//   }
// })();

const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").map(Number);

(()=>{
  for(let i=0; i<8; i++){
    for(let j=i+1; j<9; j++){
      const tmp = [...n]
      tmp.splice(j,1);
      tmp.splice(i,1);
      const sum = tmp.reduce((a,c)=>a+c);
      if(sum===100){
        console.log(tmp.sort((a,b)=>a-b).join("\n"));
        return;
      }
    }
  }
})();
