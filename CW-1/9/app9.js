const valueA = prompt(``).trim().toLowerCase().replace(/[^a-zа-яё]/g, ``);
const valueB = prompt(``).trim().toLowerCase().replace(/[^a-zа-яё]/g, ``);

const modifA = valueA.split(``).sort().join();
const modifB = valueB.split(``).sort().join();

rez = modifA === modifB ? "true" : "false";
console.log(rez);

// 2 способ

// let a = prompt(``)
//   .trim()
//   .toLowerCase()
//   .replace(/[^a-zа-яё]/g, ``);
// let b = prompt(``)
//   .trim()
//   .toLowerCase()
//   .replace(/[^a-zа-яё]/g, ``);
// let sum = 0;

// if (a.length === b.length) {
//   for (i = 0; i < a.length; i++) {
//     if (a.includes(b[i])) sum += 1;
//     else {
//       console.log(false);
//       break;
//     }
//   }
// }
// if (sum === a.length) console.log(true);
