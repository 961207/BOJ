// let n=+require('fs').readFileSync('dev/stdin').toString(),
//   star="*",
//   blank=" ";

// for(let i=0; i<n; i++){
//   let bStr="",
//     sStr="";
//   for(let j=0; j<i; j++){
//     bStr+=blank;
//   }
//   for(let j=0; j<(n-i)*2-1; j++){
//     sStr+=star;
//   }
//   console.log(bStr+sStr);
// }

let n=+require('fs').readFileSync('dev/stdin').toString();
for(let i=n; i>0; i--) console.log(" ".repeat(n-i)+"*".repeat(2*i-1));
