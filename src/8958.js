const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();

for(let i=0; i<T; i++){
  let score = 0;
  let sum = 0;
  for(let j=0; j<n[i].length; j++){
    if(n[i].charAt(j) === "O"){
      score += 1;
      sum += score;
    }
    else score = 0;

  }
  console.log(sum);
}
