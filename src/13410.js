const [N,K] = require("fs").readFileSync("dev/stdin").toString().trim().split(" ").map(Number);
let sum = 0;
for (let i=0; i<K; i++) {
  const multiply = N*(i+1);
  const result = parseInt(multiply.toString().split("").reverse().join(""));
  if (sum<result) sum=result;
}

console.log(sum);
