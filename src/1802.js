let n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let T=n.shift();

const find = (arr) => {
  const oddArr = [];
  const evenArr = [];
  for(const [i,v] of arr.entries()){
    if(i%2 === 0) evenArr.push(v);
    else oddArr.push(v);
  }
  const evenStr = evenArr.join("");
  if(evenStr.includes("11") || evenStr.includes("00")){
    return -1;
  } else if(oddArr.length === 1 || evenArr.length === 1){
    return 1;
  } else return find(oddArr);
}

while(T--){
  const arr = n.shift().split("").map(v=>+v);
  let idx = find(arr);
  if(idx === -1) console.log("NO");
  else console.log("YES");
}
