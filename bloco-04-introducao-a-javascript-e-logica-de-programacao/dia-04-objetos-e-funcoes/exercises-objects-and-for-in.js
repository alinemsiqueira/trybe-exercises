let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 01
console.log('Bem-vinda, ' + info.personagem);

// Exercício 02
info['recorrente'] = 'Sim';

// // Exercício 03
for (let key in info) {
  console.log(key);
}

// // Exercício 04
for (let key in info) {
  console.log(info[key]);
}

// Exercício 05
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
    break;
  }
  console.log(info[key] + ' e ' + info2[key]);
}

