let a = prompt();
let arr = [0, 1];

if (isNaN(a)) {
  console.log(`Ошибка ввода`);
} else {
  a = +a;
  for (let i = 2; i < a; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
}
