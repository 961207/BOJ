const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").map(Number);

(function(){
  for(let i=0; i<9; i++){
    const arr1 = n.slice(0,i).concat(n.slice(i+1,9));
    for(let j=0; j<8; j++){
      const arr2 = arr1.slice(0,j).concat(arr1.slice(j+1,8));
      if(arr2.reduce((a,c)=>a+c) === 100){
        for(const ele of arr2.sort((a,b)=>a-b)){
          console.log(ele);
        }
        return;
      }
    }
  }
})();
