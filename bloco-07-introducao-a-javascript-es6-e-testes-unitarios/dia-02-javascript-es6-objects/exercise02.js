const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 01
const addNightShift = (object, key, value) => object[key] = value;

addNightShift(lesson2, 'turno', 'noite');
console.log(lesson2);

// Exercício 02
const showKeys = object => Object.keys(object);

console.log(showKeys(lesson1));

// Exercício 03
const objectSize = object => Object.keys(object).length;

console.log(objectSize(lesson3));

// Exercício 04
const objectValues = object => Object.values(object);

// console.log(objectValues(lesson1));

// Exercício 05
const lessons = { lesson1, lesson2, lesson3 }
const allLessons = Object.assign({}, lessons);

console.log(allLessons);

// Exercício 06
const totalEstudantes = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;

console.log(totalEstudantes);

// Exercício 07
const getValueByNumber = (object, index) => {
  console.log(Object.values(object)[index]);
}

getValueByNumber(lesson1, 0);

// Exercício 08
const verifyPair = (obj, key, value) => {
  return Object.entries(obj).some(([currKey, currValue]) => currKey === key && currValue === value);
}

console.log(Object.entries(lesson3));
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false