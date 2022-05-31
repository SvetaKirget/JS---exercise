// 18. На входе есть пустой массив (он есть с самого начала). Первоначально мы вводим n – количество эл-ов массива. Далее вводим с клавиатуры сами значения (должен находиться в массиве хотя бы один 0) и добавляем их в конец данного массива. Необходимо вывести сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

const a = +prompt(``);
let arr = [];
let sum = 0;

for (let i = 0; i < a; i++) {
  const n = +prompt();
  !isNaN(n) ? arr.push(n) : console.log("nekkorectni vvod");
  n === 0 ? !arr.push(n) : null;
}

arr.forEach((el) => (sum += el));
console.log(sum);

// for (let i = 0; i < a; i++) {
//   const n = +prompt();
//   !isNaN(n) ? arr.push(n) : console.log("nekkorectni vvod");
//   for (let p = 0; p < arr.length; p++) {
//     if (p > 0) sum += arr(i);
//     if (p === 0) break;
//   }
// }
// n === 0 ? !arr.push(n) : null;
// console.log(sum);

// //  arr.forEach((el) => (sum += el));
// // console.log(sum);
