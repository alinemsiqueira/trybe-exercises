let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 01
console.log('Bem-vinda, ' + info.personagem);

// Exercício 02
info['recorrente'] = 'Sim';

// Exercício 03
for (let key in info) {
  console.log(key);
}

// Exercício 04
for (let key in info) {
  console.log(info[key]);
}