// 11 На входе есть массив [1, 2, 3, 4, 5], мы НЕ вводим с клавиатуры его значений, он есть по условию задания. Мы вводим только одно число клавиатуры. Необходимо разбить данный одномерный массив на маленькие массивы в зависимости от того, какого число ввел пользователь (смотреть тесты, тк возможно криво объяснила условие). Добавить проверки на ввод числа (не должно быть больше длины массива, 0, пустая строка, строка). В данном задании использовать push для добавления нового элемента в массив
const array = [20, 30, 40, 50, 60, 70];

const value = 4;
const count = Math.ceil(array.length / value);
let little_arr = [];
let big_arr = [];

for (let i = 0; i < array.length; i++) {
  little_arr.push(array[i]);

  if (little_arr.length === value) {
    big_arr.push(little_arr);
    little_arr = [];
  } else if (big_arr.length + 1 === count) {
    big_arr.push(little_arr);
  }
}
console.log(big_arr);
