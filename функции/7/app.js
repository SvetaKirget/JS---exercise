// 7. На входе число. Необходимо создать функцию, возвращающую факториал этого числа
const userNum = +prompt("Введите число для вычисления факториала");

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(userNum));
