const a = prompt("Введите число");

if (Number(a) % 3 === 0) {
  console.log(`Это число и остаток от деления на 3 равен 0`);
} else if (isNaN(a)) {
  console.log(`Это не число`);
} else console.log(`Это число, но остаток от деления на 3 не равен 0`);
