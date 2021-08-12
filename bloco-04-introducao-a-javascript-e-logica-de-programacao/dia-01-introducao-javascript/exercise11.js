  let salario = 3000.00;
  let salarioLiquido = 0;
// INSS
  if (salario < 1556.94) {
    salarioLiquido = salario - (salario * 8) / 100;
  } else if (salario <= 2594.92) {
    salarioLiquido = salario - (salario * 7.5) / 100;
  } else if (salario <= 5189.82) {
    salarioLiquido = salario - (salario * 11) / 100;
  } else if (salario > 5189.82) {
    salarioLiquido = salario - 570.88;
  }
  
// IR (Imposto de Renda)
  if (salarioLiquido < 1903.98) {
    console.log(salarioLiquido);
  } else if (salarioLiquido <= 2826.65) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 7.5) / 100 - 142.80);
    console.log(salarioLiquido);
  } else if (salarioLiquido <= 3751.05) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 15) / 100 - 354.80);
    console.log(salarioLiquido);
  } else if (salarioLiquido <= 4664.68) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 22.5) / 100 - 636.13);
    console.log(salarioLiquido);
  } else if (salario > 4664.68) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 27.5) / 100 - 869.36);
    console.log(salarioLiquido);
  }