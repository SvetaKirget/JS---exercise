// 6 На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, то передать массив в новую функцию, возвращающую массив из только четных чисел

const input = [1, 2, 3, 4, 5, 6];

function checkChet(param) {
  return param.filter((element) => element % 2 === 0);
}

function checkNum(param) {
  let counter = 0;
  param.forEach((element) => isNaN(element)) ? (counter += 1) : null;
  return counter === 0 ? checkChet(param) : `Error`;
}

let out = checkNum(input);
console.log(out);
