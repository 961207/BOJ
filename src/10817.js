let n=require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(v=>+v);
console.log(n.sort((a, b) => a - b).reduce((a,c,i)=>{
  if(i===1){
    return a>c?a:c;
  } else{
    return a<c?a:c;
  }
}));
