const t = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
t.shift();

console.log(
  t
    .map((v) => {
      const [n, m] = v.split(" ").map(Number);
      let sum = 0;
      for (let a = 1; a < n - 1; a++) {
        for (let b = a + 1; b < n; b++) {
          const num = (Math.pow(a, 2) + Math.pow(b, 2) + m) / (a * b);
          if (Number.isInteger(num)) sum++;
        }
      }
      return sum;
    })
    .join("\n")
);
