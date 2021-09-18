const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => acc + curr.split('')
  .reduce((acc, curr) => curr === 'A' || curr === 'a'? acc + 1 : acc, 0), 0);
}
console.log(containsA());
// assert.deepStrictEqual(containsA(), 20);
