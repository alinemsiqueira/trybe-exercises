// Exercício 01
function checkPalindrome (a) {
  let b = a.split('').reverse().join('');
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome('arara'));
console.log(checkPalindrome('desenvolvimento'));

// Exercício 02
function indexOfBiggerValue(a) {
  let biggerValue = a[0];
  let indexOfBiggerValue = 0;
  for (let count = 1; count < a.length; count += 1) {
    if (a[count] > biggerValue) {
      indexOfBiggerValue = count;
      biggerValue = a[count];
    }
  }
  return indexOfBiggerValue;
}
console.log(indexOfBiggerValue([2, 3, 6, 7, 10, 1]));

// Exercício 03
function indexOfSmallerValue(a) {
  let smallerValue = a[0];
  let indexOfSmallerValue = 0;
  for (let count = 1; count < a.length; count += 1) {
    if (a[count] < smallerValue) {
      indexOfSmallerValue = count;
      smallerValue = a[count];
    }
  }
  return indexOfSmallerValue;
}
console.log(indexOfSmallerValue([2, 4, 6, 7, 10, 0, -3]));