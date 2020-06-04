
const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T1 = n[0];
const T1_OUT = +T1.split(" ")[0]
const T1_IN = +T1.split(" ")[1]
const T2 = n[1];
const T2_OUT = +T2.split(" ")[0]
const T2_IN = +T2.split(" ")[1]
const T3 = n[2];
const T3_OUT = +T3.split(" ")[0]
const T3_IN = +T3.split(" ")[1]
const T4 = n[3];
const T4_OUT = +T4.split(" ")[0]
const T4_IN = +T4.split(" ")[1]

const T1_SUM = T1_IN;
const T2_SUM = T1_SUM + T2_IN - T2_OUT;
const T3_SUM = T2_SUM + T3_IN - T3_OUT;

let max = 0;

if(T1_SUM >= T2_SUM) max = T1_SUM;
else max = T2_SUM;

if(max >= T3_SUM){}
else max = T3_SUM;

console.log(max);
