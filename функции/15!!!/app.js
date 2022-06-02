// 15. На входе массив. Необходимо создать функцию, возвращающую массив из всех четных чисел, возведенных в квадрат

const arr = [1, 2, 3, 4, 6];

function checkChet(param) {
  return param.filter((element) => element % 2 === 0);
}

function checkNum(param) {
  let counter = 0;
  param.forEach((element) => isNaN(element)) ? (counter += 1) : null;
  return counter === 0 ? checkChet(param) : `Error`;
}

let out = checkNum(arr);
console.log(out);