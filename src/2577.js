const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(v=>+v);
const M = n[0]*n[1]*n[2];
const M_STR = M.toString();
const OBJ = {
  "0":0,
  "1":0,
  "2":0,
  "3":0,
  "4":0,
  "5":0,
  "6":0,
  "7":0,
  "8":0,
  "9":0
}
const OBJ_KEYS = Object.keys(OBJ).map(v=>+v);
const OBJ_VALUES = Object.values(OBJ);
const OBJ_LENGTH = OBJ_KEYS.length;

for(const ele of M_STR){
  for(let i=0; i<OBJ_LENGTH; i++){
    if(OBJ_KEYS[i] === +ele){
      OBJ_VALUES[i] = OBJ_VALUES[i] + 1;
    }
  }
}

console.log(OBJ_VALUES.join("\n"));
