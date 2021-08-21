// Fonte: https://github.com/paulohbsimoes/trybe-exercises/blob/master/01-fundamentos/bloco-04-introducao-a-javascript-e-logica-de-programacao/dia-04-javascript-objetos-e-funcoes/exercicio_1_bonus.js

const romanNumbers = {
  'i': 1,
  'v': 5,
  'x': 10,
  'l': 50,
  'c': 100,
  'd': 500,
  'm': 1000
}

function romanToNumber(number) {
  number = number.toLowerCase();
  let size = number.length;
  let sum = romanNumbers[number[size - 1]];
  let currentNumber = romanNumbers[number[size - 1]];
  for (let count = 2; count <= size; count += 1) {
    let next = romanNumbers[number[size - count]];
    if (currentNumber <= next) {
      sum += next;
    } else {
      sum -= next;
    }
    currentNumber = next;
  }
  return sum;
}

console.log(romanToNumber('MCMLXVI')) // 1966
console.log(romanToNumber('DCCLXXI')) // 771
console.log(romanToNumber('MDCXVII')) // 1617
console.log(romanToNumber('MMCMLCIX')) // 2959
