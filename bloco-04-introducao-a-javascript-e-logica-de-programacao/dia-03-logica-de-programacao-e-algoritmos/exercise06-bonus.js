let number = 17;

let isPrimeNumber = true;

if (number < 2) {
  isPrimeNumber = false;
} else {
  for (let count = 2; count < number; count++) {
    if (number % count === 0) {
      isPrimeNumber = false;
    }
  }
}

if (isPrimeNumber) {
  console.log(number + ' é número primo')
} else {
  console.log(number + ' não é número primo')
}