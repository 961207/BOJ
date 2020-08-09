const n = 1000-(require('fs').readFileSync('dev/stdin')+"");
const a=n%500;
const b=a%100;
const c=b%50;
const d=c%10;
const e=d%5;
const getMathFloor=(i,j)=>Math.floor(i/j);
console.log(getMathFloor(n,500)+getMathFloor(a,100)+getMathFloor(b,50)+getMathFloor(c,10)+getMathFloor(d,5)+e/1)
