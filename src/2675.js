const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

for(let i=0; i<T; i++){
  const R = n[i].split(" ")[0];
  const S = n[i].split(" ")[1];
  const arr = [];
  for(const ele of S){
    for(let j=0; j<R; j++){
      process.stdout.write(ele);
    }
  }
  console.log("");
}
