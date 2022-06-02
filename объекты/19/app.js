let a = +prompt();
let arr = [0, 1];

let obj = {};

for (let i = 2; i < a; i++) {
  arr.push(arr[i - 1] + arr[i - 2]);
}

obj.fib = arr;
console.log(obj);