let n = 4;

for (let index = 1; index <= n; index += 1) {
  let result = '';
  for(let spaces = 1; spaces <= (n - index); spaces += 1) {
    result += ' ';
  }
  for(let star = 1; star <= index; star += 1) {
    result += '* ';
  }
  console.log(result);
}
