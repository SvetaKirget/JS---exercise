const value = +prompt("Введите число");

const a = Math.floor((value % 10000) / 1000);
const b = Math.floor((value % 1000) / 100);
const c = Math.floor((value % 100) / 10);
const d = Math.floor(value % 10);

if (!isNaN === value) {
  console.log();
} else console.log("Некорректный ввод");

a % 2 == 0 ? console.log(`${a} - Чётное`) : console.log(`${a} - Нечётное`);
b % 2 == 0 ? console.log(`${b} - Чётное`) : console.log(`${b} - Нечётное`);
c % 2 == 0 ? console.log(`${c} - Чётное`) : console.log(`${c} - Нечётное`);
d % 2 == 0 ? console.log(`${d} - Чётное`) : console.log(`${d} - Нечётное`);
