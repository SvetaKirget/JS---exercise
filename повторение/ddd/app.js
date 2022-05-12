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
