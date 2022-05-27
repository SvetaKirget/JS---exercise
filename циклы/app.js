// // 1
// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 50) {
//   console.log(i);
//   i++;
// }

// 2
// let arr = [1, 2, 3, 4, 5];
// for (let i =0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// let i = 0;
// while(i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//     console.log(i);
// }

// 3
// let arr = [2, 3, 4, 5];
// let rez = 1;
// for (let i = 0; i < arr.length; i++) {
//   rez *= arr[i];
// }
// console.log(rez);

// let arr_ = [2, 3, 4, 5];
// let i = 0;
// let rez = 1;
// while (i < arr_.length) {
//   rez *= arr_[i];
//   i++;
// }
// console.log(rez);

// let arr = [2, 3, 4, 5];
// let i = 0;
// let rez = 1;
// do {
//     rez*=arr[i];
//     i++;
// } while (i<arr.length);
// console.log(rez);

// 4
// for (let i = 11; i < 34; i++) {
//   console.log(i);
// }

// let i = 11;
// while (i<34) {
//     console.log(i);
//     i++;
// }

// 5
// for (let i = 0; i < 101; i++) {
//   if (i % 2 === 0) {
//   }
//   console.log(i);
// }

// 6
// let i = 0,
//   rez = 0;
// while (i <= 100) {
//   rez += i;
//   i++;
// }
// console.log(rez);

// 7
// let arr = [1, 2, 3, 4, 5];
// let rez = 0;

// for(let i = 0; i<arr.length; i++) {
//     rez+=arr[i];
// }
// console.log(rez);

// 8
// let arr = [1, 2, 3, 4, 5];
// let rez = 0;
// for (let i of arr) {
//   rez += i;
// }
// console.log(rez);

// 9
// первый вариант
// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// let rez = [];
// for (let i = 0; i < arr.length; i++) {
//   if (rez.includes(arr[i])) continue;
//   else rez.push(arr[i]);
// }
// console.log(rez);

// второй вариант
// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// let rez = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!rez.includes(arr[i])) rez.push(arr[i]);
// }
// console.log(rez);

// 10
// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// let rez = [];
// for (let i of arr) {
//     if (!rez.includes(i)) rez.push(i);
// }
// console.log(rez);

// 11
// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort(),
//   i = 0,
//   rez = [];
//   while(i<arr.length) {
//       if (!rez.includes(arr[i])) rez.push(arr[i]);
//       i++;
//   }
//   console.log(rez);

// 12
// const arr = [2, 5, 9, 15, 0, 4];
// for (let i of arr) {
//   if (i % 3 === 0) console.log(i);
// }

// 13
// const arr = [2, 5, 9, 15, 0, 4];
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] % 5 === 0) console.log(arr[i]);
//   i++;
// }

// 14
// const arr = [-1, 2, -3, 4, -5, 6, -7, 8];
// let a = 0;
// for (let i = 0; i<=arr.length; i++) {
//     if (arr[i]>0) a += arr[i]
// }
// console.log(a);

// 15
// const arr = [10, 20, 30, 50, 235, 3000],
//   arrStr = [];

// for (let i = 0; i < arr.length; i++) {
//   arrStr.push(String(arr[i]));
// }
// for (let i of arrStr) {
//   if (i[0] == "1" || i[0] == `2` || i[0] == `5`) console.log(i);
// }

// 16
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].join(`-`);
// let concatStr = ``;
// for (let i = 0; i < arr.length; i++) {
//   if (i === 0) concatStr += `-${arr}`;
//   else if (i === arr.length - 1) concatStr += `-`;
// }
// console.log(concatStr);

// 17
// let i = 0;
// while (i <=100) {
//   if (i % 7 === 0) console.log(i);
//   i++;
// }

// 18
// let text = prompt(``);
// let num = +prompt(``);

// for(let i = 0; i<num; i++) {
//     console.log(text);
// }

// 19
// const text = `Hello`;
// let i = 0;
// for(let i = 0; i<10; i++) {
// console.log(`${i} ${text}`);
// }
