// 3 На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Если результат проверки – true, то передать массив в новую функцию, возвращающую произведение всех элементов массива
const arr = [1, 2, 3, 4, 5, 6];

function chekArr(arrParam) {
  let strError = 0;
  for (let el of arrParam) isNaN(el) ? (strError += 1) : null;
  if (strError === 0) return true;
  return false;
}

function someOfArray(arrParam) {
  let newVal = chekArr(arrParam);
  if (newVal === true) {
    let mut = 1;
    for (let i = 0; i < arrParam.length; i++) mut *= arrParam[i];
    return mut;
  } else return `Error`;
}

let mut = someOfArray(arr);

console.log(mut);
