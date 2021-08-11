let a = 5;
let b = 2;
let c = 1;

// Exercício 1

function sum(a, b) {
  return a + b;
}
console.log(sum(a, b));

function subtraction(a, b) {
  return a - b;
}
console.log(subtraction(a, b));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(a, b));

function divide(a, b) {
  return a / b;
}
console.log(divide(a,b));

function module(a) {
  if (a % b === 0) {
    let result = true;
    if (result === true) {
      return "O número é par!";
    }
  }
  else {
    return "O número é impar!";
    }
  }
console.log(module(a))

// Exercício 2

function compareAmongTwo(a, b) {
  if (a > b) {
    return(a);
  }
  else if(a < b) {
    return(b);
  }
  else if (a === b) {
    return("Os números são iguais");
  }
}
console.log(compareAmongTwo(a, b))

// Exercício 3
function biggestOfThree(a, b, c) {
  if (a > b  & b > c) {
    return a;
  } else if (a < b & b > c) {
  return b;
  } else {
  return c;
  }
}
console.log(biggestOfThree(a, b, c));

// Exercício 4
function positivity (a) {
  if (a > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
}
console.log(positivity(a));

