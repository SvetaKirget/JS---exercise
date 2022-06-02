const arr = [10, 23, 45, 30, 38, 47, 56, 99];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
      obj.arr[i] = true;
  } else obj.arr[i] = false;
}
console.log(obj);