const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
(()=>{
  for(let i=0; i<n.length-1; i++){
    for(let j=i+1; j<n.length; j++){
      const arr = n.filter((_,index)=>index !== i && index !== j);
      if(arr.reduce((a,c)=>a+c) === 100){
        console.log(arr.join("\n"));
        return;
      }
    }
  }
})();
