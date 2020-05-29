const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

const A_TO_Z = "abcdefghijklmnopqrstuvwxyz";

for(const ele of A_TO_Z){
  const IDX = T.indexOf(ele).toString();
  // console.log(T.indexOf(ele));
  process.stdout.write(IDX + " ");
}
