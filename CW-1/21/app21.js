const num = +prompt(``);

if (num === 0) {
  console.log(`Зелёный`);
} else if (
  num === 1 ||
  num === 3 ||
  num === 5 ||
  num === 7 ||
  num === 9 ||
  num === 12 ||
  num === 14 ||
  num === 16 ||
  num === 18 ||
  num === 19 ||
  num === 21 ||
  num === 23 ||
  num === 25 ||
  num === 27 ||
  num === 30 ||
  num === 32 ||
  num === 34 ||
  num === 36
) {
  console.log(`Красный`);
} else if (
  num === 2 ||
  num === 4 ||
  num === 6 ||
  num === 8 ||
  num === 10 ||
  num === 11 ||
  num === 13 ||
  num === 15 ||
  num === 17 ||
  num === 20 ||
  num === 22 ||
  num === 24 ||
  num === 26 ||
  num === 28 ||
  num === 29 ||
  num === 31 ||
  num === 33 ||
  num === 35
) {
  console.log(`Чёрный`);
} else console.log(`Ошибка`);

// if (num === 0) {
//   console.log(`Зелёный`);
// } else if (num >= 37 && num < 0) {
//   console.log(`Ошибка`);
// } else if ((num >= 1) % 2 === 0 && (num <= 10) % 2 === 0) {
//     console.log(`Чёрный`);
// } else if ((num >= 11) % 2 != 0 && (num <= 18) % 2 != 0) {
//     console.log(`Чёрный`);
// } else if ((num >= 19) % 2 === 0 && (num <= 28) % 2 === 0) {
//   console.log(`Чёрный`);
// } else if ((num >= 29) % 2 != 0 && (num <= 36) % 2 != 0) {
//   console.log(`Чёрный`);
// } else console.log(`Красный`);


// ???? другая логика