const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const num = +n.shift();

for(i=0; i<num; i++){
 console.log(`${+n[i].split(' ')[0] + +n[i].split(' ')[1]}`);
}
