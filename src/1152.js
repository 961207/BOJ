const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
if(n.toString().trim().split(" ").toString() === ''){
  console.log(0);
}
else console.log(n.toString().trim().split(" ").length);
