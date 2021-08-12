let n = 7;

for (let lines = 1; lines <= n; lines += 2) {
  let result = '';
  let spacing = (n - lines) / 2

  for (let space = spacing; space > 0; space -= 1) {
      result += ' ';
  }

  for (let star = 1; star <= lines; star += 1) {
      result += '*'
  }

  for (let space = spacing; space > 0; space -= 1) {
    result += ' ';
  }
  console.log(result);
}