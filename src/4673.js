const d = (n) => {
  const a = n + +n.toString().charAt(0) + +n.toString().charAt(1) + +n.toString().charAt(2) + +n.toString().charAt(3);
  return a;
}

const arr = [];

for(let i=0; i<10000; i++){
  arr.push(d(i));
}

for(let i=1; i<10001; i++){
  if(arr.includes(i)){

  }
  else console.log(i);
}
