// Exercício 01
const testingScope = escopo => (escopo? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !':  'Não devo ser utilizada fora meu escopo (else)');

console.log(testingScope(false));

// Exercício 02
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const reorderOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}

const reordenedOddAndEvens = reorderOddsAndEvens();

console.log(`Os números ${reordenedOddAndEvens} se encontram ordenados de forma crescente !`);

// Exercício 02 - Bônus
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);