const n = parseInt(require('fs').readFileSync('dev/stdin').toString().trim());
for(let i=n-54; i<=n; i++){
  if(i === n){
    console.log(0);
    break;
  } else{
    let sum = i;
    for(const ele of i.toString().split("")){
      sum += +ele;
    }
    if(sum === n){
      console.log(i);
      break;
    }
  }
}
