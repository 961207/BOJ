const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [A,B,C] = n.shift().split(' ').map(v=>+v);
const [t1,t2,t3] = n.map(v=>v.split(' ').map(v=>+v));
let fee = 0;
for (let i=1;i<=100;i++) {
  let currentNumOfCars = 0;
  if (t1[0] <= i && i < t1[1]) currentNumOfCars ++;
  if (t2[0] <= i && i < t2[1]) currentNumOfCars ++;
  if (t3[0] <= i && i < t3[1]) currentNumOfCars ++;
  if (currentNumOfCars === 1) fee += A;
  else if (currentNumOfCars === 2) fee += 2*B;
  else if (currentNumOfCars === 3) fee += 3*C;
}
console.log(fee);
