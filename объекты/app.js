// let info = new Object();
// let info1 = {};

// let infoA = {
//     name: `Sveta`,
//     age: 30,
// };
// console.log(infoA);
// console.log(infoA.name);

// вложение
// let infoB = {
//   name: `Sveta`,
//   age: 30,
//   adress: {
//     city: `Minsk`,
//     street: `Freedom`,
//   }
// };
// console.log(infoB);
// console.log(infoB.adress);
// console.log(infoB.adress.city);

// let infoA = {
//   name: `Sveta`,
//   age: 30,
// };
// console.log(infoA);
// delete infoA.age;
// console.log(infoA);

// изменение
// console.log(infoA);
// infoA.age = 18;
// console.log(infoA);

// нахожнение всех ключей в объекте, разбиение на(индексы)
// let infoA = {
//         name: `Sveta`,
//         age: 30,
//         id: 10,
//         lastName: `Kirget`,
//     };

//     console.log(Object.keys(infoA));

// массив значений объектов
// let infoA = {
//             name: `Sveta`,
//             age: 30,
//             id: 10,
//             lastName: `Kirget`,
//         };

//         console.log(Object.values(infoA));

// массив пара: ключ-значение
// let person = {
//                 name: `Sveta`,
//                 age: 30,
//                 id: 10,
//                 lastName: `Kirget`,
//             };

//             console.log(Object.entries(person));

// задачи на лекции
// 1
// let user = {};
// user.name = `John`;
// user.surname = `Smith`;
// user.name = `Pete`;
// delete user.name;
// console.log(user);

// 2
// let user = {
//     name: `Sveta`,
//     age: 29,
//     1: 10,
// };
// for (let key in user) {
//     if (!isNaN(key)) {
//         console.log(key);
//     }
// }

// 3
// let user = {
//   name: `Sveta`,
//   age: 29,
//   id: 10,
// };
// for (let num in user) {
//   if (!isNaN(user[num])) {
//     console.log(user[num]);
//   }
// }

// 4
// let user = {
//   name: `Sveta`,
//   age: 29,
//   id: 10,
// };
// for (let num in user) {
//     if(!isNaN(user[num]))
//   if (user[num] % 2 === 0) {
//     console.log(user[num]);
//   }
// }
// console.log();

// 5
// let user = {
//     name: `Sveta`,
//     age: 29,
//     id: 10,
//     a: 1,
//     b: 3,
//   },
//   arr = [];

//   for(let key in user) {
//       if (!isNaN(user[key]) && user[key] %2 !=0) arr.push(user[key])
//   }

//   6
// let user = {
//   name: `Sveta`,
//   age: 29,
//   id: 10,
// };
// for (let key in user) if (!isNaN(user[key])) console.log(user[key] * 2);

// 7
// let user = {
//     name: `Sveta`,
//     2: 29,
//     4: 10,
//   },
//   arr = [];
// for (let key in user) {
//   !isNaN(user[key]) ? arr.push(user[key] ** 2) : null;
// }

// 8
// let user = {
//   name: `Sveta`,
//   age: `29`,
//   4: `10`,
//   test: `Hi`,
// };
// let str = ``;
// for (let key in user) {
//   if (isNaN(user[key])) {
//     str += user[key];
//   }
// }
// console.log(str);

// 9
// let obj = {};
// let n = 0;
// for (let key in obj) {
//   if (odj[key]) n += 1;
// }
// if (!n) console.log(false);
// console.log(true);

// 10
// const user = {
//   a: `1`,
//   v: `2`,
//   b: `3`,
// };
// let rez = 0;

// for (let key in user) {
//   if (key) rez += 1;
// }
// console.log(rez);

// 11
// const user = {
//   a: 1,
//   v: 8,
//   b: `jhg`,
// };
// let rez = 0;
// for (let key in user) {
//   if (!isNaN(user[key])) {
//       rez += 1;
// }
// }
// console.log(rez);

// 12
// let user = {
//     name: prompt(``).trim(),
//     age: +prompt(``).trim(),
//     birthday: prompt(``).trim(),
//     status: prompt(``).trim(),
// }
// console.log(user);

// let a = prompt(``);
// let b = prompt(``);
// let c = prompt(``);
// let d = prompt(``);

// let user = {
//   name: null,
//   age: null,
//   birthday: null,
//   status: null,
// };

// if (isNaN(a) && isNaN(b) && isNaN(c) && isNaN(d)) {
//     user.name = a;
//     user.age = b;
//     user.birthday = d;
//     user.status = a;
// }
// console.log(user);

// 13
// let obj = {};

// let a = +prompt(``);
// let b = +prompt(``);

// obj.avg = (a + b) / 2;

// console.log(obj);

// 14
// let obj = {};

// let n = +prompt(``);
// let arr = [];
// let rez = 0;
// for (let i = 0; i < n; i++) {
//   arr.push(+prompt());
//   rez += arr[i];
// }

// obj.avg = rez / n;
// console.log(obj);

// 15
// const a = +prompt(``);
// let obj = {};
// let arrA = [];
// let n = 1;
// let m = 1000;

// for (let i = 0; i < a; i++) {
//   arrA.push(Math.round(Math.random() * (m - n) + n));
// }
// obj.arr = arrA;

// console.log(obj);

// 16
// let n = +prompt(``);
// let obj = {};
// let flag;

// for (let i = 0; i < n; i++) {
//   obj[i] = prompt(``).trim().toLowerCase();
// }
// for (let key in obj) {
//   if (obj[key] === `минск`) {
//     flag = true;
//     break;
//   } else flag = false;
// }

// console.log(flag);

// 17
// let obj = {
//   a: 10,
//   b: 20,
//   c: 10,
//   d: 50,
//   e: 10,
// };
// let arr = [];

// for (let key in obj) {
//   if (arr.includes(obj[key])) {
//     continue;
//   } else arr.push(obj[key]);
// }
// // obj.add = arr;
// // console.log(obj.add);
// console.log(arr);

// 18
// const obj = {
//   Коля: 1000,
//   Вася: 500,
//   Петя: 200,
//   Даша: 4000,
//   Наташа: 600,
// };

// const arr = Object.keys(obj);
// const value = Object.values(obj);
// let array = [];

// for (let i = 0; i<arr.length; i++) {
//   if (arr[i] == `Даша` || arr[i] == `Вася`) {
//     array.push(value[i])
//   }
// }

// console.log(array);

// 19
// let a = +prompt();
// let arr = [0, 1];

// let obj = {};

// for (let i = 2; i < a; i++) {
//   arr.push(arr[i - 1] + arr[i - 2]);
// }

// obj.fib = arr;
// console.log(obj);

// 20
// const strA = prompt(``)
//   .trim()
//   .toLowerCase()
//   .replace(/[^a-zа-яё]/g, ``);
// const strB = prompt(``)
//   .trim()
//   .toLowerCase()
//   .replace(/[^a-zа-яё]/g, ``);

// const modifA = strA.split(``).sort().join();
// const modifB = strB.split(``).sort().join();

// let obj = {};

// if (modifA === modifB) {
//   obj.avg = true;
// } else obj.avg = false;
// console.log(obj);

// 21
// const arr = [10, 23, 45, 30, 38, 47, 56, 99];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//       obj.arr[i] = true;
//   } else obj.arr[i] = false;
// }
// console.log(obj);

// 22
// let obj = {
//   a: +prompt(``),
//   b: +prompt(``),
//   c: +prompt(``),
//   d: +prompt(``),
//   e: +prompt(``),
// };
// let arr = [];
// for (let key in obj) {
//     arr.push(obj[key])
// }
// console.log(arr);

// 1 что объект не пустой
// let obj = {};
// let n = Object.keys(obj);
// if (n.lenght > 0) console.log(`Full`);
// else console.log(`Not full`);
