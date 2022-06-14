// 13. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, то передать массив в новую функцию, возвращающую максимальное значение

const arr = [12, 15, 19, 23, 44, 100, 115];

function checkNum(param) {
  let counter = 0;
  param.forEach((element) => (isNaN(element) ? (counter += 1) : null));
  if (counter > 0) throw new Error(`It's a string`);
  return true;
}

function maxNum(arr) {
  try {
    if (checkNum(arr)) {
      let max = arr[0];
      for (let key of arr) if (key > max) max = key;
      return max;
    }
  } catch (er) {
    return er;
  }
}

console.log(maxNum(arr));
