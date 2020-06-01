const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const STR = n.shift();
const obj = {};

for(const ele of STR){
  if(Object.keys(obj).includes(ele.toUpperCase())){
    obj[ele.toUpperCase()] += 1;
  }
  else{
    obj[ele.toUpperCase()] = 1;
  }
}

const values = Object.values(obj);
const keys = Object.keys(obj);

let num = 0;
let key = "";

for(let i=0; i<values.length; i++){
  if(num < values[i]){
    num = values[i];
    key = keys[i];
  }
  else if(num === values[i]){
    key = "?";
  }

}

console.log(key);
