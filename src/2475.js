console.log(require('fs').readFileSync('dev/stdin').toString().trim().split(" ").reduce((a,c)=>a+c**2,0)%10);
