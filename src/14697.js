const [A,B,C,N] = require("fs").readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

console.log((()=>{
    for(let i=Math.floor(N/A); i>=0; i--){
        const minusByA = N - A*i;
        for(let j=Math.floor(minusByA/B); j>=0; j--){
            const minusByB = minusByA - B*j;
            for(let k=Math.floor(minusByB/C); k>=0; k--){
                const minusByC = minusByB - C*k;
                if(minusByC === 0) return 1;
            }
        }
    }
    return 0;
})());
