// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Kiwi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacaxi', 'Limão', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  return [ ...fruit, ...additional ]
};

console.log(fruitSalad(specialFruit, additionalItens));