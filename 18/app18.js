const a = +prompt("Напишите положительное число");
console.log(`Сумма цифр = ${String(a).split('').reduce((a,b) => Number (a) + Number (b))}`);
console.log(`Произведение цифр = ${String(a).split('').reduce((a,b) => Number (a) * Number (b))}`);