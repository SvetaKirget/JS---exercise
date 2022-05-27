// let arr = new Array();
// let arr = [];

// let fruits = ["Яблоко", "Апельсин", "Слива",];

// alert( fruits[0] ); // Яблоко
// alert( fruits[1] ); // Апельсин
// alert( fruits[2] ); // Слива

// заменить
// fruits[2] = 'Груша';
// // добавить
// fruits[3] = 'Лимон';

// console.log( fruits.length ); // 3

// многомерный массив
// let matrix = [
//     [1, 4, 6],
//     [9, 8, 2],
//     [7, 3, 5],
// ]

// console.log(matrix);
// console.log(matrix[1][1]); // 8

// метод .shift() - удаляет элемент в начале, так что второй элемент становится первым.
// метод .pop() - удаляет последний элемент.
// метод .unshift() - добавляет элемент в начало массива.
// метод .push() - добавляет элемент в конец массива.
// метод .splice() - добавляет, удаляет и заменяет элементы в массиве.

// let arr = [`green`, `blue`, `black`, `red`,];
// arr.splice(1,1);
// console.log(arr); // удаление blue

// arr.splice(0, 1, `grey`);
// console.log(arr); // начиная с нулевой позиции заменяет 1 элемент green

//  arr.splice(1, 0, `yellow`, `pink`);
//  console.log(arr); //  начиная с 1 позиции добавляем 2 элемента, 0 для того чтобы добавить

// arr.splice(-1,1);
// console.log(arr); // начиная с последней позиции удаляем 1 элемент

// копирование массива методы .slice() and .concat()

// какая-то итерация для каждого элемента - forEach();

// arr.forEach(function(arr, index, color) {
//     console.log(arr);
//     console.log(index);
//     console.log(color);
// })

// сокращенная запись
// arr.forEach(arr=>console.log(arr));

// сортировка массива по возрастанию
// const array = [1, 3, 6, 4, 9, 2];
// array.sort((x1, x2) => {
//   if (x1 < x2) {
//     return -1;
//   }
//   if (x1 === x2) {
//     return 0;
//   }
//   return 1;
// });

// console.log(array);

// 2 способ
// const array = [1, 3, 6, 4, 9, 2];
// array.sort((x1, x2) => x1 - x2)

// console.log(array);

// развернуть массив без reverse
// const arr = [1, 2, 3, 4, 9];
// const reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed);

// 2 variant
// const arr = [1, 2, 3, 4, 9];
// const rez = [];
// arr.forEach((Element) => {
//   rez.unshift(Element);
// });

// console.log(rez);
