const n = +prompt(``);
if (isNaN(n)) {
  console.log(`Ошибка ввода`);
} else {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  console.log(arr);
}

// 2 способ

// let a = prompt();
// let arr = [0, 1];

// if (isNaN(a)) {
//   console.log(`Ошибка ввода`);
// } else {
//   a = +a;
//   for (let i = 2; i < a; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
// }
