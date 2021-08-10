let tamanhoBase = 5;

for (let index = 1; index <= tamanhoBase; index += 1) {
  let result = ''
  for(let star = 1; star <= tamanhoBase; star += 1) {
    result += '*';
  }
  console.log(result)
}
