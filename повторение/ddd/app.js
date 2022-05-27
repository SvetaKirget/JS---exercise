// 3
// const a = [1, 2, 6, 9, 5, 22, 29];
// const chet = [];
// const nech = [];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     chet.push(a[i]);
//   }

//   if (a[i] % 2 != 0) {
//     nech.push(a[i]);
//   }
// }
// let sum = 0;
// for (let i = 0; i < chet.length; i++) sum += chet[i];

// let mun = 1;
// for (let i = 0; i < nech.length; i++) mun *= nech[i];

// console.log(sum);
// console.log(mun);
// 2
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     chet.push(a[i]);
//   }
//   if (a[i] % 2 != 0) {
//     nech.push(a[i]);
//   }
// }
// console.log(chet);
// console.log(nech);
// 1
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     console.log(`${a[i]} - чётное`);
//   } else console.log(`${a[i]} - нечётное`);
// }
// 4
// const a = [1, 5, 9, 6, 3].sort();
// let flag;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === a[i + 1]) {
//     flag = false;
//     break;
//   } else flag = true;
// }
// console.log(flag);

// 5
// const a = prompt(``).trim().toLowerCase();
// const b = [`a`, `e`, `i`, `o`, `u`, `y`];
// let rez = 0;

// for (let i = 0; i < a.length; i++) {
//   if (b.includes(a[i])) {
//     rez++;
//   }
// }
// console.log(a.length - rez);

// 1
// const a = prompt(``).split(``);
// let arr = [];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === `f`) {
//     arr.push(i);
//   }
// }
// if (arr.length > 1) {
//   console.log(arr[0], arr[arr.length - 1]);
// } else if (arr.length === 1) console.log(arr[0]);
// else console.log(`NO`);

// 2
// const a = `asd@@asd@@`;
// const arr = [];

// for(let i = 0; i<a.length; i++) {
//     if (a[i] === `@`) {
//         continue;
//     } else {
//         arr.push(a[i]);
//     }
// }
// console.log(arr.join());
// console.log(a.replaceAll(`@`, ` `));

// 3
// const a = [1, 2, 3, 4];
// let max;
// let min;
// for (let i = 0; i <= a.lenght; i++) {
//   if (i === 0) {
//     max = a[i];
//     min = a[i];
//   }
//   if (a[i] > max) max = a[i];
//   if (a[i] < min) min = a[i];
// }
// console.log(max, min);

// 4
// const a = prompt(``).trim().toLowerCase();
// const b = [`a`, `e`, `i`, `o`, `u`];
// let rez = 0;

// for (let i = 0; i < a.length; i++) {
//   if (b.includes(a[i])) {
//     rez++;
//   }
// }
// console.log(a.length - rez);

// 5
// const date = `2025-12-31`;
// let a = date.split(`-`);
// let b = a.reverse().join(`/`);
// console.log(b);

// 6 массив четные нечётные
// const a = [1, 2, 6, 9, 5, 22, 29];
// const chet = [];
// const nech = [];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     chet.push(a[i]);
//   }
//   if (a[i] % 2 != 0) {
//     nech.push(a[i]);
//   }
// }
// console.log(chet);
// console.log(nech);

// 7 преобразовать строку
// let str = prompt("Введите текст");
// let arr = str.split("_");
// let rez = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   rez += arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// console.log(rez);

// 8 факториал
// let value = +prompt();
// let rez = 1;
// for (let i = 1; i <= value; i++) {
//   rez *= i;
// }
// console.log(rez);

// 9 ёлочка
// const a = +prompt();

// for (let i = 1; i <= a; i++) {
//   console.log(`*`.repeat(i));
// }

// while  and do...while
// let i = 0;
// while (i++ < 10) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 10;
// while (i--) {
//   console.log(i);
// }

// do while
// do {
//   console.log(`action`);
// } while (i > 0);

// найти сумму от 0 до 10
// let sum = 0;
// let i = 0;
// while (i <= 10) {
//   sum = sum + i;
//   i++;
// }
// console.log(`sum= ` + sum);

// произведение
// let num = 1;
// let i = 1;
// while (i <= 5) {
//   num = num * i;
//   i++;
// }
// console.log(`num= ` + num);


