const n=+require('fs').readFileSync('dev/stdin').toString().trim();

let i=1;
let sum=0;
let idx;

while(true){
  sum += i;
  if(sum >= n){
    idx = i;
    break;
  }
  i++;
}

let reverse;

if(idx%2===0) reverse = true;
else reverse = false;

const a = idx + 1;
const b = sum - n + 1;

if(reverse){
  console.log(`${a-b}/${b}`);
} else {
  console.log(`${b}/${a-b}`);
}
