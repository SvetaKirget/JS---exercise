// 14. На входе массив. Необходимо создать функцию, возвращающую количество элементов массива

const arr = [1, 20, 22, 30, 40];

function num(param) {
  return param.filter((el) => el);
}

function checkNum(param) {
  let counter = 0;
  param.forEach((element) => isNaN(element)) ? (counter += 1) : null;
  return counter === 0 ? num(param) : `Error`;
}

let rez = num(arr);
console.log(rez);
