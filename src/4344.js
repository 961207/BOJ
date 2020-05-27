const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();

for(let i=0; i<T; i++){
  const a = n[i].split(" ");
  const b = a.shift();
  let sum = 0;
  for(const ele of a){
    sum += +ele
  }
  const avg = sum/b;
  let c = 0;
  for(const ele of a){
    if(+ele>avg){
      c += 1;
    }
  }
  const d = (c/b)*100
  console.log(d.toFixed(3)+"%");

}
