let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallestNumber = numbers[0];
for (let count = 1; count < numbers.length; count += 1) {
  if (numbers[count] < smallestNumber) {
    smallestNumber = numbers[count];
  }
}
console.log(smallestNumber);
