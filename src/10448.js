const n = require("fs").readFileSync("dev/stdin").toString().trim().split("\n").map(Number);
let t = n.shift();
const arr = [];
for(let i=1; i<45; i++){
    const triNum = i*(i+1)/2;
    arr.push(triNum)
}
arr.reverse();

const getSol = (arr,num) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            for(let k=0; k<arr.length; k++){
                if(arr[i]+arr[j]+arr[k] === num){
                    return 1;
                }
            }
        }
    }
    return 0;
}

while(t--){
    const num = n.shift();
    console.log(getSol(arr.filter(v=>v<num),num));
}
