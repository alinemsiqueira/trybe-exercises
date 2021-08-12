// Exercício 01
function checkPalindrome (a) {
  let b = a.split('').reverse().join('');
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome('arara'));
console.log(checkPalindrome('desenvolvimento'));

