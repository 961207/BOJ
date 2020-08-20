let n=require('fs').readFileSync('dev/stdin').toString(),
  m=n.split(" "),
  a=m.sort((x,y)=>x-y).join(" "),
  b=m.sort((x,y)=>y-x).join(" ");
f=()=>{
  if(n===a) return "ascending"
  else if(n===b) return "descending"
  else return "mixed"
}
console.log(f());
