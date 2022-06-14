// 15. На входе массив. Необходимо создать функцию, возвращающую массив из всех четных чисел, возведенных в квадрат

const arr = [1, 2, 3, 4, 6];

function checkNum(param) {
  let counter = 0;
  param.forEach((element) => isNaN(element)) ? (counter += 1) : null;
  if (counter > 0) throw new Error(`Not a number`);
  return true;
}

function checkChet(param) {
  return param.filter((element) => element % 2 === 0);
}

function doubleElement(arr) {
  try {
    if (checkNum(arr)) {
      let arrChet = checkChet(arr);
      let newArr = arrChet.map((el) => el ** 2);
      return newArr;
    }
  } catch (er) {
    return er;
  }
}

console.log(doubleElement(arr));
