const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let i = 0;

while(i<n.length){
  const j = +n[i].split(" ")[0] + +n[i].split(" ")[1];
  if(!j) break;
  console.log(j);
  i++
}
