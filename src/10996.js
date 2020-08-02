let n=+require('fs').readFileSync('dev/stdin').toString();
for(let i=0; i<n; i++){
  let star_1=""
  let star_2=""
  for(let j=0; j<n; j++){
    if(j%2===0) star_1+="*";
    else star_1+=" ";
  }
  for(let j=0; j<n; j++){
    if(j%2!==0) star_2+="*";
    else star_2+=" ";
  }
  console.log(star_1);
  console.log(star_2);
}
