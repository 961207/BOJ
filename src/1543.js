const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const str = n.shift();
const searchStr = n.shift();

let sum = 0;
const searching = (v) => {
  if(v.search(searchStr) === -1) return;
  sum++;
  return searching(v.slice(v.search(searchStr)+searchStr.length,v.length));
}

searching(str);

console.log(sum);
