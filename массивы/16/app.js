// 16 На входе есть пустой массив (он есть с самого начала). Первоначально мы вводим n – количество эл-ов массива. Далее вводим с клавиатуры сами значения и добавляем их в конец данного массива. Выведите сумму всех элементов массива. Использовать forEach

const a = +prompt(``);
let arr = [];
let sum = 0;

for (let i = 0; i < a; i++) {
  const n = +prompt(``);
  arr.push(n);
}
arr.forEach((el) => (sum += el));
console.log(sum);
