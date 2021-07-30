let salario = 2300.00;

if (salario <= 1556.94) {
    salario = salario * 0.92;
    console.log(salario);
}
else if (salario >= 1556.95 && salario <= 2594.92) {
    if (salario < 1903.99){
        salario = (salario * 0.92)
        console.log(salario);
    }
    else if (salario >= 1903.99 && salario <= 2826.65) {
        salario = (salario * 0.91) - ((salario * 0.925) - 142.80);
        console.log(salario);
    }
}
else if (salario >= 2594.93 && salario <= 5189.82) {
    if (salario >= 1903.99 && salario <= 2826.65) {
        salario = salario * 0.89 - ((salario * 0.925) - 142.80);
        console.log(salario);
    }
    else if (salario >= 2826.66 && salario <= 3751.05) {
        salario = salario * 0.89 - ((salario * 0.85) - 354.80);
        console.log(salario);
    }
    else if (salario >= 3571.06 && 4664.68) {
        salario = salario * 0.89 - ((salario * 0.775) - 636.13);
        console.log(salario);
    }
    else if (salario > 4664.68) {
        salario = salario * 0.89 - ((salario * 0.725) - 869.36);
        console.log(salario);
    }
}
else if (salario > 5189.82){
    salario = salario - 570.88;
    salario = (salario * 0.725) - 869.36;
    console.log(salario);
}
