// 13 На входе число символизирующее количество элементов массива. Далее вводятся сами значения и формируется массив. Необходимо создать новый массив и добавить туда только числа. Использовать map
const a = +prompt(``);
const b = [];
const c = [];
for (let i = 0; i < a; i++) {
  b.push(prompt(``));
}
for (let value of b) {
  if (!isNaN(value)) {
    c.push(value);
  }
}
console.log(c);
