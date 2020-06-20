const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [a] = n.map(v=>+v);

const strArr = []

for(let i=1; i<=a; i++){
  const str = i.toString();
  // 만약에 str이 4와 7만 가지고 있다면 출력
  (!str.includes("0") && !str.includes("1") && !str.includes("2") && !str.includes("3") && !str.includes("5") && !str.includes("6") && !str.includes("8") && !str.includes("9") && strArr.push(str))
}

console.log(strArr[strArr.length - 1]);
