const [a,b] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [n,m] = a.split(" ").map(Number);
const nums = b.split(" ").map(Number);
let result = 0;

(()=>{
  for(let i=0; i<n-2; i++){
    for(let j=i+1; j<n-1; j++){
      for(let k=j+1; k<n; k++){
        let sum = nums[i]+nums[j]+nums[k];
        if(sum === m){
          return result = sum;
        } else if(sum < m){
          if(sum > result) result = sum;
        }
      }
    }
  }
})();

console.log(result);
