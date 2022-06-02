// 13. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, то передать массив в новую функцию, возвращающую максимальное значение

const arr = [12, 15, 19, 23, 44, 100, 115];

function maxNum(param) {
  return param.filter((el) => Math.max(el));
}

function checkNum(param) {
  let counter = 0;
  param.forEach((element) => isNaN(element)) ? (counter += 1) : null;
  return counter === 0 ? maxNum(param) : `Error`;
}

let rez = maxNum(arr);
console.log(rez);
