// Fonte: Gabarito Trybe

const checkMyNumber = (myNumber, number) => myNumber === number;

const lotteryDraw = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Parabéns, você ganhou!' : 'Tente novamente!';
}

console.log(lotteryDraw(5, checkMyNumber));
