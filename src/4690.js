for (let i = 2; i <= 100; i++) {
  const a = i;
  let b, c, d;
  for (let b = 2; b < a; b++) {
    for (let c = b + 1; c < a; c++) {
      for (let d = c + 1; d < a; d++) {
        if (
          Math.pow(a, 3) ===
          Math.pow(b, 3) + Math.pow(c, 3) + Math.pow(d, 3)
        ) {
          console.log(`Cube = ${a}, Triple = (${b},${c},${d})`);
        }
      }
    }
  }
}
