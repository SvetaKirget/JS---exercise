// 5 . На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, то передать массив в новую функцию, возвращающую новый массив, где каждый элемент * 2

const arr = [1, 2, 3, 4, 5, 6];

function arrCheck(array) {
  let error = 0;
  for (let key of array) isNaN(key) ? (error += 1) : null;
  return error === 0 ? true : false;
}

function newArray(array) {
  let boolOfCheckArray = checkArr(array);
  return boolOfCheckArray ? array.map((el) => el * 2) : `Error`;
}
console.log(newArray(arr));
