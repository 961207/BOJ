let n=+require('fs').readFileSync('dev/stdin').toString();
for(let i=1; i<=2*n-1; i++){
  let star="";
  if(i<=n){
    for(let j=0; j<i; j++){
      star+="*";
    }
  } else {
    for(let j=0; j<2*n-i; j++){
      star+="*";
    }
  }
  console.log(star);
}
