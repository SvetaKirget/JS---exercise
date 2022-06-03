const arr = [-1, 2, -3, 4, -5, 6, -7, 8];
let a = 0;
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > 0) a += arr[i];
}
console.log(a);
