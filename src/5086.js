let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
for(const ele of n){
  const[a,b]=ele.split(" ");
  if(a==="0") break;
  else{
    if(Number.isInteger(b/a)) console.log("factor");
    else if(Number.isInteger(a/b)) console.log("multiple");
    else console.log("neither");
  }
}
