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

// Exercício 5
function triangleCheck (a, b, c) {
  if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(a, b, c));

// Exercício 6
function pecaDeXadrez (a) {
  if (a.toLowerCase() === 'pawn') {
    return 'forward';
  } else if (a.toLowerCase() === 'knight') {
    return 'l-shape';
  } else if (a.toLowerCase() === 'bishop') {
    return 'diagonal';
  } else if (a.toLowerCase() === 'rooks') {
    return 'horizontal or vertical';
  } else if (a.toLowerCase() === 'queen') {
    return 'any direction';
  } else if (a.toLowerCase() === 'king') {
    return 'one square in any direction';
  } else {
    return 'error! invalid chess piece!';
  }
}
console.log(pecaDeXadrez('bishop'));

// Exercício 7
function notaFinal (nota) {
  if (nota >= 90) {
    return 'Nota A';
  } else if (nota >= 80) {
    return 'Nota B';
  } else if (nota >= 70) {
    return 'Nota C';
  } else if (nota >= 60) {
    return 'Nota D';
  } else if (nota >= 50) {
    return 'Nota E';
  } else {
    return 'Nota F';
  }
}
console.log(notaFinal(92));

// Exercício 8
function ifEven (a, b, c) {
  if ( a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ){
    return true;
  } else {
    return false;
  }
}
console.log(ifEven(a, b, c));

// Exercício 9
function ifNotEven (a, b, c) {
  if ( a % 2 === 1 || b % 2 === 1 || c % 2 === 1 ){
    return true;
  } else {
    return false;
  }
}

// Exercício 10
function valorLucro (valorCusto, valorVenda) {
  let valorCustoTotal = valorCusto + valorCusto * 0.2;
  if (valorCustoTotal < valorVenda && valorCustoTotal > 0 && valorVenda > 0) {
    return (valorVenda - valorCustoTotal) * 1000;
  } else if (valorCustoTotal > valorVenda && valorCustoTotal > 0 && valorVenda > 0) {
    return 'O valor de venda é abaixo do valor de custo!';
  } else {
    return 'Erro! Os valores não podem ser zero!';
  }
}
console.log(valorLucro(100, 150));

