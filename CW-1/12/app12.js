const a = +prompt(``);

if (a <= 13) {
  console.log(`Детство`);
} else if (a >= 14 && a <= 24) {
  console.log(`Молодость`);
} else if (a >= 25 && a <= 59) {
  console.log(`Зрелость`);
} else {
  console.log(`Старость`);
}
