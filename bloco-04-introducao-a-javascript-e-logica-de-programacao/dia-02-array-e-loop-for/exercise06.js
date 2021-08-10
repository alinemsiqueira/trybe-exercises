let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let howManyEven = 0;

for (let count = 0; count < numbers.length; count += 1) {
  if (numbers[count] % 2 !== 0) {
  howManyEven += 1;
  }
}
if (howManyEven === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(howManyEven);
}
