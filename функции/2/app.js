// 2 На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, то передать массив в новую функцию, возвращающую сумму всех элементов массива
const arr = [1, 2, 3, 4, 5, 6];

function chekArr(arrParam) {
  let strError = 0;
  for (let el of arrParam) isNaN(el) ? (strError += 1) : null;
  if (strError > 0) return false;
  return true;
}

function someOfArray(arrParam) {
  let newVal = chekArr(arrParam);
  if (newVal == true) {
    let sumArr = arrParam.reduce((sum, current) => sum + current);
    return sumArr;
  } else return `Error`;
}

let sum = someOfArray(arr);

console.log(sum);

