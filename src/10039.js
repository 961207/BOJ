let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);

let sum=0;
for(const ele of n){
  let num = ele;
  if(num<=40) num = 40;
  sum += num;
}

console.log(sum/5);
