// 4. На входе массив. Необходимо создать функцию проверки на то что в массиве только строки. Если результат проверки – true, то передать массив в новую функцию, возвращающую строку из всех элементов массива
const arr = [`asd`, `asd`, `asd`, `asd`];

const arrCheck = (array) => {
  let errorNum = 0;
  for (let key of array) !isNaN(key) ? (errorNum += 1) : null;
  if (errorNum > 0) return false;
  return true;
};

const arrStr = (array) => {
  let value = arrCheck(array);
  if (value === true) return array.join(``);
  return `Error`;
};

console.log(arrStr(arr));
