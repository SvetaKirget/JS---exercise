const a = prompt(`Введите число`);
if (isNaN(a)) {
  console.log(`Это не число`);
} else if (a > 0) {
  console.log(`Число больше 0`);
} else if (a < 0) {
  console.log(`Число меньше 0`);
} else console.log(`Число 0`);
