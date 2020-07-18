const n = +require('fs').readFileSync('dev/stdin').toString().trim();

const dp = [];

for(let i=1; i<=n; i++){
  if(i === 1 || i === 2 || i === 4) dp[i] = -1;
  else if(i === 3 || i === 5) dp[i] = 1;
  else if(dp[i-3] === -1 && dp[i-5] === -1) dp[i] = -1;
  else if(dp[i-5] === -1) dp[i] = dp[i-3] + 1;
  else if(dp[i-3] === -1) dp[i] = dp[i-5] + 1;
  else dp[i] = Math.min(dp[i-3],dp[i-5]) + 1;
}
console.log(dp[n]);
