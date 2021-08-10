let n = 5;

for (let index = 1; index <= n; index += 1) {
  let result = ''
  for(let star = 1; star <= n; star += 1) {
    result += '*';
  }
  console.log(result)
}
