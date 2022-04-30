let a = +prompt();
let b = +prompt();
let str = prompt();

if (str == `+`) {
  console.log(a + b);
} else if (str == `-`) {
  console.log(a - b);
} else if (str == `*`) {
  console.log(a * b);
} else if ((str = `/`)) {
  if (b === 0) {
    console.log(`На ноль делить нельзя`);
  } else console.log(a / b);
} else console.log(`Неверная операция`);
