const value = +prompt("Введите число");
const a = Math.floor((value % 10000) / 1000);
const b = Math.floor((value % 1000) / 100);
const c = Math.floor((value % 100) / 10);
const d = Math.floor(value % 10);

a % 2 == 0 ? console.log(`${a} - Чётное`) : console.log(`${a} - Нечётное`);
b % 2 == 0 ? console.log(`${b} - Чётное`) : console.log(`${b} - Нечётное`);
c % 2 == 0 ? console.log(`${c} - Чётное`) : console.log(`${c} - Нечётное`);
d % 2 == 0 ? console.log(`${d} - Чётное`) : console.log(`${d} - Нечётное`);

// if (a % 2 == 0) {
//   console.log(`${a} - Четное`);
// } else {
//   console.log(`${a} - Нечётное`);
// }

// if (b % 2 == 0) {
//   console.log(`${b} - Четное`);
// } else {
//   console.log(`${b} - Нечётное`);
// }

// if (c % 2 == 0) {
//   console.log(`${c} - Четное`);
// } else {
//   console.log(`${c} - Нечётное`);
// }

// if (d % 2 == 0) {
//   console.log(`${d} - Четное`);
// } else {
//   console.log(`${d} - Нечётное`);
// }
