// const n = parseInt(require('fs').readFileSync('dev/stdin').toString().trim());
// for(let i=n-54; i<=n; i++){
//   if(i === n){
//     console.log(0);
//     break;
//   } else{
//     let sum = i;
//     for(const ele of i.toString().split("")){
//       sum += +ele;
//     }
//     if(sum === n){
//       console.log(i);
//       break;
//     }
//   }
// }

const n = parseInt(require('fs').readFileSync('dev/stdin').toString().trim());
(function(){
  for(let i=1; i<=n; i++){
    let sum = i + i.toString().split("").reduce((a,c)=>parseInt(a)+parseInt(c),0);
    if(sum === n){
      console.log(i);
      return;
    }
  }
  console.log(0);
})()
