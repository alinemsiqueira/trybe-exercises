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

// Exercício 04
function createFridayButton() {
  const createFridayButton = document.createElement('button');
  createFridayButton.innerText = 'Sexta-feira';
  createFridayButton.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(createFridayButton);
}

const fridayButton = document.querySelector('#btn-friday');
fridayButton.addEventListener('click', clickFridayButton);

// Exercício 05
function clickFridayButton() {
  const friday = document.querySelectorAll('.friday');
  for (let day = 0; day < friday.length; day += 1) {
    if (friday[day].classList.contains('sextou')) {
      friday[day].classList.remove('sextou');
      friday[day].innerText = dezDaysList[(day + 1) * 7 - 2];
    } else {
      friday[day].classList.add('sextou');
      friday[day].innerText = 'SEXTOU!';
    }
  }
}

// Exercício 06
const daysContainer = document.querySelector('.days-container');
daysContainer.addEventListener('mouseover', zoomInDays);
daysContainer.addEventListener('mouseout', zoomOutDays);

function zoomInDays(event) {
  event.target.style.fontSize = '30px';
}

function zoomOutDays(event) {
  event.target.style.fontSize = '';
}

// Exercício 07 e 08
const myTasks = document.querySelector('.my-tasks');
function addTasks(taskName, color) {
  const createSpan = document.createElement('span');
  createSpan.className = 'task-name';
  createSpan.innerText = taskName;
  createSpan.color = color;

  const createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;

  myTasks.appendChild(createDiv);
  myTasks.appendChild(createSpan);
}

addTasks('Aula', 'lightpink');
addTasks('Exercícios', 'lightgreen')
addTasks('Reunião', 'lightblue');

// Exercício 09
const tasksToSelect = document.getElementsByClassName('.task');
tasksToSelect.addEventListener('click', selectedTask);

function selectedTask(event) {
  let selectedTask = document.querySelector('.selected');
  if (selectedTask === null) {
    event.target.classList.add('selected');
  } else {
    event.target.classList.remove('selected');
  }
}
selectedTask();

// Exercício 10
daysContainer.addEventListener('click', addSelectedColor);

function addSelectedColor(event) {
  let selectedTask = document.querySelector('.selected');
  const originalColor = 'rgb(119, 119, 119)';
  let newColor;
  if (selectedTask !== null) {
    newColor = selectedTask.style.backgroundColor;
    if (event.target.style.color === newColor) {
      event.target.style.color = originalColor;
    } else {
      event.target.style.color = newColor;
    }
  }
}
addSelectedColor();

// Exercício Bônus
const input = document.querySelector('input');
const addButton = document.querySelector('#btn-add');
input.addEventListener('keypress', checkEnterPressed);
addButton.addEventListener('click', addCommitment);

function checkEnterPressed(event) {
  if (event.key === 'Enter') {
    addCommitment();
  }
}

function addCommitment() {
  if (input.value === '') {
    return alert('Por favor insira o nome do compromisso!');
  }
  const createDiv = document.createElement('li');
  const commitmentList = document.querySelector('.input-container');
  createDiv.className = 'task';
  createDiv.innerText = input.value;
  commitmentList.appendChild(createDiv);
  input.value = '';
}
