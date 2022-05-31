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

// map - перебор массива, преобразование в новый массив
// let arr = [`green`, `blue`, `black`, `red`,];
// let rez = arr.map(function(item, index, array) {
// return item[2];
// });

// console.log(rez);

// forEach
// let arr = [`green`, `blue`, `black`, `red`,];
// arr.forEach(function (item, index, array) {
//     console.log(`${item} находится на ${index} позиции в ${array}`)
// });

// фильтрация массива по условию
// const people = [
//   { name: `Света`, age: 29 },
//   { name: `Ева`, age: 19 },
//   { name: `Даша`, age: 18 },
//   { name: `Аня`, age: 21 },
// ];
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 20) {
//     adults.push(people[i]);
//   }
// }

// console.log(adults);

// filter метод
// const adults = people.filter(person=>{
//     if (person.age >=20) {
//         return true
//     }
// });

// const adults = people.filter((person) => person.age >= 20);
// console.log(adults);

// fff
// let obj = {
//   name: `Dasha`,
//   age: 18,
//   city: `Minsk`,
//   id: 1,
// };

// for (let key in obj) {
//   !isNaN(obj[key]) ? console.log(obj[key]) : null;
// }

// jjj
// let arr = [
//   {
//     name: `Sveta`,
//     age: 29,
//   },
//   {
//     name: `Eva`,
//     age: 19,
//   },
// ];

// let arrA = arr.filter((el) => el.age === 19);
// console.log(arrA);

// lll
// let arr = [
//   {
//     name: `Sveta`,
//     age: 29,
//   },
//   {
//     name: `Eva`,
//     age: 19,
//   },
//   {
//     name: `Dasha`,
//     age: 18,
//   },
//   {
//     name: `Hanna`,
//     age: 21,
//   },
// ];

// arr.forEach((el) => {
//   el.age % 2 === 0 ? console.log(el.age) : null;
// });

// lll
// const arr = [1, 2, 3, 4, 5, 6];
// const value = 2;

// let arrA = [];
// let rez = [];

// for (let i = 0; i < arr.length; i++) {
//   arrA.push(arr[i]);
// }
// if (arrA[i] === value) {
//   rez.push(arrA);
//   arrA = [];
// }

// console.log(rez);

// четность нечетность
// const arr = [1,2,3,4,5,6,7];
// let chet = [];
// let nechet = [];

// arr.forEach(el => (el%2 === 0) ? chet.push(el) : nechet.push(el));

// элементы больше нуля

const arr = [1, -2, 3, -4, 5, -6, 7];

// let newArr = arr.filter(el => el>0);

let newArr = arr.map((el) => {
  if (el > 0) return el;
});

//  const arr = [1,-2, 3,-4, 5, -6,7];
//  let newArr = arr.some(el => el>0);
