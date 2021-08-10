let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let count = 1; count < numbers.length; count += 1) {
  for (let countTwo = 0; countTwo < count; countTwo += 1) {
    if (numbers[count] < numbers[countTwo]) {
      let position = numbers[count];
      numbers[count] = numbers[countTwo];
      numbers[countTwo] = position;
    }
  }
}
console.log(numbers);