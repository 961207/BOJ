let n=+require('fs').readFileSync('dev/stdin').toString();
let x=2*n-1;
let y=0;
for(let i=1; i<=2*n-1; i++){
  let star="";
  for(let j=0; j<y; j++){
    star+=" "
  }
  for(let j=0; j<x; j++){
    star+="*";
  }
  if(i<n){
    x-=2;
    y++;
  } else {
    x+=2;
    y--;
  }
  console.log(star);
}
