const n = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let i = 0;

while (i < n.length) {
  console.log(+n[i].split(" ")[0] + +n[i].split(" ")[1]);
  i++;
}
