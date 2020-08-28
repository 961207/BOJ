// const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
// const t = parseInt(n.shift());
// const results = new Array(t);
// for(let i=0; i<t; i++){
// 	let sum = 1;
// 	for(let j=0; j<t; j++){
// 		if(i === j) continue;
// 		const [w1,h1] = n[i].split(" ");
// 		const [w2,h2] = n[j].split(" ");
// 		if((w1 < w2) && (h1 < h2)) sum += 1; // sum++
// 	}
// 	results[i] = sum;
// }
// console.log(results.join(" "));

const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').filter((v,i)=>i>0).map(v=>v.split(' ').map(Number));

console.log(n.map(v1=>n.filter(v2=>(v1[0] < v2[0] && v1[1] < v2[1])).length + 1).join(' '));
