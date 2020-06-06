const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

let num = 0;

for(let j=0; j<n.length; j++){
  const obj = {};
    for(let i=0; i<n[j].length; i++){
    const ele = n[j].charAt(i);
    const justBefore = n[j].charAt(i-1);

    if(ele === justBefore){
      obj[ele] += 1;
    }
    else if(ele !== justBefore) {
      if(obj[ele] === undefined){
        obj[ele] = 1;
      }
      else if(obj[ele] !== undefined){
        num += 1;
        break;
      }
    }
  }
}

console.log(n.length - num);
