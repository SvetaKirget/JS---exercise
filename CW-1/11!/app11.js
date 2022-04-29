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
