const n = require("fs").readFileSync("dev/stdin").toString().trim().split(" ").map(Number);
const [H,M] = n;
const m = M-45;

if(m<0){
  const h = H-1;
  if(h<0){
    console.log(h+24,m+60);
  } else{
    console.log(h,m+60);
  }
} else{
  console.log(H,m);
}
