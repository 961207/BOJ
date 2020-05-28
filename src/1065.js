const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +n.shift();

const ARR = [];

for(let i=0; i<T; i++){
  const NUM = i+1;
  const NUM_0 = +NUM.toString().charAt(0);
  const NUM_1 = +NUM.toString().charAt(1);
  const NUM_2 = +NUM.toString().charAt(2);
  const NUM_3 = +NUM.toString().charAt(3);
  if(NUM.toString().length === 1){
    ARR.push(NUM);
  }
  else if(NUM.toString().length === 2){
    ARR.push(NUM);
  }
  else{
    if((NUM_2 - NUM_1) === (NUM_1 - NUM_0)){
      ARR.push(NUM);
    }
  }
}

console.log(ARR.length);
