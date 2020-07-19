const n=+require('fs').readFileSync('dev/stdin').toString().trim();

const dp = [];

let i=0;
while(true){
  if(i === 0) dp[i] = 1;
  else dp[i] = dp[i-1] + i*6;

  if(dp[i]>=n) break;
  i++;
}

console.log(dp.length);
