const a = +prompt(``);

switch (a) {
  case `0`:
    console.log(`Зелёный`);
    break;
  case `1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36`:
    console.log(`Красный`);
    break;
  case `2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35`:
    console.log(`Чёрный`);
    break;

  default:
    console.log(`Ошибка`);
    break;
}
