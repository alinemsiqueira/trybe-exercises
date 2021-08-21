function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const buttonContainer = document.querySelector('button-container');
createFridayButton(); // Parte do exercício 05, posicionado aqui apenas para melhor estética.
createHolidayButton(); // Parte do exercício 02, posicionado aqui apenas para melhor estética.
// Exercício 01
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  for (let day = 0; day < dezDaysList.length; day += 1) {
    const createLi = document.createElement('li');
    createLi.innerText = dezDaysList[day];
    createLi.classList.add('days');
    document.querySelector('#days').appendChild(createLi);
  }
}
createDays();

function addFridays() {
  const friday = document.querySelectorAll('.days');
  for (let day = 0; day < friday.length; day += 1) {
    if (friday[day].innerText === '4' || friday[day].innerText === '11' || friday[day].innerText === '18' || friday[day].innerText === '25') {
      friday[day].classList.add('friday');
    }
  }
}
addFridays();
function addHolidays() {
  const holiday = document.querySelectorAll('.days');
  for (let day = 0; day < holiday.length; day += 1) {
    if (holiday[day].innerText === '24' || holiday[day].innerText === '25' || holiday[day].innerText === '31') {
      holiday[day].classList.add('holiday');
    }
  }
}
addHolidays();

// Exercício 02

function createHolidayButton() {
  const createHolidayButton = document.createElement('button');
  createHolidayButton.innerText = 'Feriados';
  createHolidayButton.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(createHolidayButton);
}

// Exercício 03
const holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', clickHolidayButton);

const holiday = document.querySelectorAll('.holiday')
function clickHolidayButton() {
  for (let day = 0; day < holiday.length; day += 1) {
    if (holiday[day].classList.contains('selected-holiday')) {
      holiday[day].classList.remove('selected-holiday');
    } else {
      holiday[day].classList.add('selected-holiday');
    }
  }
}

