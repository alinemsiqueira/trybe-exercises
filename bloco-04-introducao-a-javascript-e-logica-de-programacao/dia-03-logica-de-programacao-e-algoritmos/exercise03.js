let n = 6;

for (let index = 0; index < n; index += 1) {
  let result = "";
  const tamanho = n - index;

  for(let spaces = 0; spaces < tamanho; spaces += 1) {
    result += " ";
  }
  for(let star = n; star >= tamanho; star -= 1)
    result += "*";
  console.log(result);
  }


