const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

let num = 0;

for(const ele of T){
  const code = ele.charCodeAt(0);
  if(code>=65 && code<=67){num += 3}
  else if(code>=68 && code<=70){num += 4}
  else if(code>=71 && code<=73){num += 5}
  else if(code>=74 && code<=76){num += 6}
  else if(code>=77 && code<=79){num += 7}
  else if(code>=80 && code<=83){num += 8}
  else if(code>=84 && code<=86){num += 9}
  else if(code>=87 && code<=90){num += 10}
}

console.log(num);
