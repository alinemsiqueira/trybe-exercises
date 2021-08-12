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

// Exercício 04
function biggestName(a) {
  let biggerName;
  let size = 0; 

  for (let count = 0; count < a.length; count += 1) {
    if (a[count].length > size) {
      size = a[count].length;
      biggerName = a[count];
    }
  }
  return biggerName;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 05
function highestNumberCount(numbers) {
  numbers.sort();
  let biggestCount = 0;
  let howMany = 0;
  let result = 0;

  for(let count=0; count < numbers.length; count += 1) {
    if (numbers[count] === numbers[count + 1]) {
      howMany += 1;
    } else {
      howMany = 0;
    }
    if(howMany > biggestCount) {
      result = numbers[count];
      biggestCount = howMany;
    }
  }
  return result;
}
console.log(highestNumberCount([2, 3, 2, 5, 8, 2, 3]));

// Exercício 06
function somaDeGauss(number) {
  let result = 0;
  for (let count = 0; count <= number; count += 1) {
    result += count;
  }
  return result;
}
console.log(somaDeGauss(5));

// Exercício 07
function verificaFimPalavra (word, ending) {
  let a = word.slice(-2);
  if (ending === a) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));