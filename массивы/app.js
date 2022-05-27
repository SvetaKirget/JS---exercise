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

// задачи на лекции и дз
// 2
// let obj = {
//       name: `Sveta`,
//       age: 29,
//       id: 10,
//     };

//     for (let keys in obj) {
//       keys === `age` ? console.log(`YES`) : console.log(`NO`);
//     }

// 3 Имеется массив объектов. Получите из этого массива объект, где name === "Bob" и сохраните это в какой-либо переменной
// const arr = [
//   {
//     name: `Jack`,
//   },
//   {
//     name: `Joe`,
//   },
//   {
//     name: `John`,
//   },
//   {
//     name: `Bob`,
//   },
// ];
// let newArr = arr.filter(el => el.name === `Bob`);
// console.log(newArr);

// 4 Удалите из массива объектов объект с name == "Anna". На выходе мы должны получить новый из двух элементов объектов без объекта, в котором ключ name == "Anna".
// const obj = [
//   {
//     name: `Anna`,
//   },
//   {
//     name: `Joe`,
//   },
//   {
//     name: `Bob`,
//   },
// ];

// const objSec = obj.filter((el) => el.name !== `Anna`);
// console.log(objSec);

// 5 Необходимо пройтись по всем age и удвоить каждое значение. На выходе мы должны получить новый массив объектов такого же вида, но с удвоенным age
// const arr = [{ age: 13 }, { age: 19 }, { age: 20 }];

// const newArr = arr.map((el) => {age: el.age * 2});
// console.log(newArr);

// const obj = [
//   { age: 13, name: `Yanis` },
//   { age: 19, name: `Hanna` },
//   { age: 20, name: `Eva` },
// ];
// const newArr = obj.map(element => {
//   element.age = element.age * 2;
//   return element;
// });
// console.log(newArr);

// 6 На вход подается объект. Необходимо посчитать количество пар (ключ: значение) где значение число и вывести их количество
// const obj = {
//   age: 13,
//   name: `Yanis`,
//   id: 19,
// };
// n = 0;
// for (let val in obj) {
//   n += 1;
// }

// console.log(n);

// 7 На входе 5 значений. Из данных элементов составить массив. Далее необходимо пройтись по каждому из элементов массива и если это число, то создать занести его в новый массив. Если длина массива равна 0, то вывести ‘Массив пуст’. Использовать map

// const arr = [1, 2, 3, 4, 5, `Hanna`, `Eva`];
// let newArr;
// if (arr.length === 0) {
//   newArr = `Массив пуст`;
// } else {
//   newArr = arr.filter((el) => !isNaN(el));
// }
// console.log(newArr);

// 8  На входе 7 чисел. Из 5 первых элементов составить массив. Далее необходимо пройтись по каждому из элементов массива и если это число НЕ равно 2 другим введенным, то создать занести его в новый массив. Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод только чисел после каждого введенного элемента. Использовать filter

// const arr = [1, 2, 3, 4, 5],
// valueA = 2,
// valueB = 3;
// const arrSec = arr.filter(element => element !== valueA && element !== valueB);
// arrSec.length === 0 ? console.log(`Пустой массив`) : console.log(arrSec);

// 9
