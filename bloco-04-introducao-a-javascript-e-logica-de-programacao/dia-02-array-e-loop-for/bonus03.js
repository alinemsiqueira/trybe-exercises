let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiply = [];

for (let count = 0; count < numbers.length; count += 1) {
  if (numbers[count + 1] === undefined) {
    multiply.push(numbers[count] * 2);
  } else {
    multiply.push(numbers[count] * numbers[count + 1]);
  }
}
console.log(multiply);