let n=+require('fs').readFileSync('dev/stdin').toString();

const f = (n) => {
  if(n===0)return 1;
  else return n*f(n-1);
}

console.log(f(n));
