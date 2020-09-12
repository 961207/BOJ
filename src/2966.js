const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const t = n.shift();
const arr = n.shift().split("");

let A = 0;
let B = 0;
let G = 0;
for(let i=0; i<t; i++){
    (i%3===0 && arr[i] === "A" && A++);
    (i%3===1 && arr[i] === "B" && A++);
    (i%3===2 && arr[i] === "C" && A++);
    (i%4===0 && arr[i] === "B" && B++);
    (i%4===1 && arr[i] === "A" && B++);
    (i%4===2 && arr[i] === "B" && B++);
    (i%4===3 && arr[i] === "C" && B++);
    (i%6===0 && arr[i] === "C" && G++);
    (i%6===1 && arr[i] === "C" && G++);
    (i%6===2 && arr[i] === "A" && G++);
    (i%6===3 && arr[i] === "A" && G++);
    (i%6===4 && arr[i] === "B" && G++);
    (i%6===5 && arr[i] === "B" && G++);
}
const result = [A,B,G];
const max = result.reduce((a,c)=>a<c?c:a);
console.log(max);
for(let i=0; i<result.length; i++){
    if(result[i] === max){
        i === 0 && console.log("Adrian");
        i === 1 && console.log("Bruno");
        i === 2 && console.log("Goran");
    }
}
