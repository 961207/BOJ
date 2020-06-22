const n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [a,b,c] = n.shift().split(" ").map(v=>+v);

const arr = Array(a).fill(0);

let num = 0;

while (true){
  if(arr[num] < b){
      arr[num] += 1;
      if(arr[num] %2 === 0){
        num -= c;
        if(num <0){
          num = a + num
        }
      }
      else {
        num += c;
        if(num>=a){
          num = num - a
        }
      }

    }
  if(arr.some((v)=>v === b)) break;
}

let sum = 0;

for(const ele of arr){
  sum += ele
}

console.log(sum - 1)
