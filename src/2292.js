// const n=+require('fs').readFileSync('dev/stdin').toString().trim();

// const dp = [];

// let i=0;
// while(true){
//   if(i === 0) dp[i] = 1;
//   else dp[i] = dp[i-1] + i*6;

//   if(dp[i]>=n) break;
//   i++;
// }

// console.log(dp.length);

const n=+require('fs').readFileSync('dev/stdin').toString().trim();

let i=0;
let j=1;
while(true){
  j += (6*i);
  if(j>=n) break;
  i++;
}

console.log(i+1);
