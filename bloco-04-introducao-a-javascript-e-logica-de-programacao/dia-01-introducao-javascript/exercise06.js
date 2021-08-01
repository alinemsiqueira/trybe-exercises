let pecaDeXadrez = 'BISHOP'.toLowerCase();

switch(pecaDeXadrez) {
    case 'pawn':
        console.log('forward');
        break;
    case 'knight':
        console.log('l-shape');
        break;
    case 'bishop':
        console.log('diagonal');
        break;
    case 'rooks':
        console.log('horizontal or vertical');
        break;
    case 'queen':
        console.log('any direction');
        break;
    case 'king':
        console.log('one square in any direction');
        break;
    default:
        console.log('error! invalid chess piece!');
}