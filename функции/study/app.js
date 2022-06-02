// function name(params) {
//     // тело функции
// }

// объвление через ключевое слово function
// имя функции - глаголы

// вызов функции - имя функции с круглыми скобками.

// function calSum(numOne, numTwo) {
//     console.log(`numOne: ${numOne}`);
//     console.log(`numTwo: ${numTwo}`);

//     let numSum = numOne + numTwo;

//     console.log(`Sum: ${numSum}`);
// }

// calSum(1, 2);

// второй вариант
// function calSum(numOne = 2, numTwo = 4) {
//     console.log(`numOne: ${numOne}`);
//     console.log(`numTwo: ${numTwo}`);

//     let numSum = numOne + numTwo;

//     console.log(`Sum: ${numSum}`);
// }

// calSum();

// function calSum(numOne, numTwo, more, less) {
//   let numSum = numOne + numTwo;

//   if(numSum >3){
//       more();
//   } else {
//       less();
//   }
// }
// function showMoreMessage() {
//     console.log(`Больше чем 3`);
// }
//   function showLessMessage() {
//       console.log(`Меньше чем 3`);
//   }

// calSum(1, 5, showMoreMessage, showLessMessage);

// после return функция не выполняется больше!!!!!!!!

// рекурсия - где функция вызывает саму себя

// функциональное выражение
// let showMessage = function () {
//   console.log(`Hello!`);
// };
// showMessage();

// перезапись
// const user = {
//     name: `Sveta`,
//     age: 29,
// };

// function getObj(obj) {
//     obj.name = `Svetlana`;
// }

// getObj(user);
// console.log(user);

// // анонимная функция
// (function(msg) {
//     console.log(msg);
// })(`Hello!`);

