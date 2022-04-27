const a = +prompt(``);
const b = +prompt(``);

if (!isNaN(a, b)) {
  console.log(`Максимальное - ${Math.max(a, b)}`);
  console.log(`Минимальное - ${Math.min(a, b)}`);
} else console.log(`Ошибка ввода`);
