let valorCustoTotal = 100 + 100 * 0.2;
let valorVenda = 150;

if (valorCustoTotal < valorVenda && valorCustoTotal > 0 && valorVenda > 0) {
    console.log((valorVenda - valorCustoTotal) * 1000);
}
else if (valorCustoTotal > valorVenda && valorCustoTotal > 0 && valorVenda > 0) {
    console.log('O valor de venda é abaixo do valor de custo!');
}
else {
    console.log('Erro! Os valores não podem ser zero!');
}
