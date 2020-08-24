const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
n.shift();

for(const ele of n.sort((a,b)=>a.split(" ")[0]-b.split(" ")[0])){
  console.log(ele);
}
