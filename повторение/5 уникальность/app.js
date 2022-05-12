const a = [1, 5, 9, 6, 3].sort();
let flag;
for (let i = 0; i < a.length; i++) {
  if (a[i] === a[i + 1]) {
    flag = false;
    break;
  } else flag = true;
}
console.log(flag);
