const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const t = parseInt(n.shift());
const results = new Array(t);
for(let i=0; i<t; i++){
	let sum = 1;
	for(let j=0; j<t; j++){
		if(i === j) continue;
		const [w1,h1] = n[i].split(" ");
		const [w2,h2] = n[j].split(" ");
		if((w1 < w2) && (h1 < h2)) sum += 1;
	}
	results[i] = sum;
}
console.log(results.join(" "));
