let n=+require('fs').readFileSync('dev/stdin').toString().trim();

const h = (n, a, b) => {
  if(n===1){
    return `${a} ${b}`
  }
  else {
    return `${h(n-1, a, 6-a-b)}\n${h(1, a, b)}\n${h(n-1, 6-a-b, b)}`;
  }
}
console.log(2**n - 1);
console.log(h(n,1,3));
