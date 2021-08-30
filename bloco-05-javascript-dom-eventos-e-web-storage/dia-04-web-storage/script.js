const article = document.querySelector('article');

const buttonBgColor = document.querySelector('#background-color');
buttonBgColor.addEventListener('click', changeBackgroundColor)
const inputBgColor = document.querySelector('.change-background');
inputBgColor.addEventListener('keypress', checkEnterBgColor);

function checkEnterBgColor(event) {
  if (event.key === 'Enter') {
    changeBackgroundColor();
  }
}

function changeBackgroundColor() {
  if (inputBgColor.value === '') {
    return alert('Por favor insira uma cor de fundo por hexadecimal, RGB ou nome (em inglês)');
  }
  if(article.classList.contains('colored')) {
    article.style.backgroundColor = '';
    article.classList.remove('colored');
  } else {
    article.style.backgroundColor = inputBgColor.value;
    article.classList.add('colored');
  }
  inputBgColor.value = '';
}

const buttonTextColor = document.querySelector('#text-color');
buttonTextColor.addEventListener('click', changeTextColor);
const inputTextColor = document.querySelector('.change-text-color');
inputTextColor.addEventListener('keypress', checkEnterTextColor);

function checkEnterTextColor(event) {
  if (event.key === 'Enter') {
    changeTextColor();
  }
}

function changeTextColor() {
  if (inputTextColor.value === '') {
    return alert('Por favor insira uma cor de texto por hexadecimal, RGB ou nome (em inglês)');
  }
  if(article.classList.contains('text-color')) {
    article.style.color = '';
    article.classList.remove('text-color');
  } else {
    article.style.color = inputTextColor.value;
    article.classList.add('text-color');
  }
  inputTextColor.value = '';
}

const buttonFontSize = document.querySelector('#font-size');
buttonFontSize.addEventListener('click', changeFontSize);
const inputFontSize = document.querySelector('.change-font-size');
inputFontSize.addEventListener('keypress', checkEnterFontSize);

function checkEnterFontSize(event) {
  if (event.key === 'Enter') {
    changeFontSize();
  }
}

function changeFontSize() {
  if (inputFontSize.value === '') {
    return alert('Por favor insira o tamanho da fonte em números!');
  }
  if(article.classList.contains('font-size')) {
    article.style.fontSize = '';
    article.classList.remove('font-size');
  } else {
    article.style.fontSize = inputFontSize.value + 'px';
    article.classList.add('font-size');
  }
  inputFontSize.value = '';
}

const buttonChangeSpace = document.