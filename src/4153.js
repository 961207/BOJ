// let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// for(const ele of n){
//   const[a,b,c]=ele.split(" ").map(v=>+v);
//   if(a === 0) break;
//   if(Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)) console.log("right");
//   else if(Math.pow(a,2)+Math.pow(c,2)===Math.pow(b,2)) console.log("right");
//   else if(Math.pow(b,2)+Math.pow(c,2)===Math.pow(a,2)) console.log("right");
//   else console.log("wrong");
// }

let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
for(const ele of n){
  let[a,b,c]=ele.split(" ").map(v=>+v).sort((a,b)=>a-b);
  if(a===0) break;
  if(a**2+b**2===c**2) console.log("right");
  else console.log("wrong");
}
