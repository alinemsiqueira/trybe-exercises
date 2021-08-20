// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
let n = 11;

for (let lines = 1; lines <= n; lines += 2) {
  let line = '';
  for (let spacing = 0; spacing < Math.ceil((n - lines) / 2); spacing++) {
    line += ' ';
  }
  for (let star = 0; star < lines; star++) {
    if (star == 0 || star == lines - 1 || lines == n) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}