const a = +prompt(``);
let obj = {};
let arrA = [];
let n = 1;
let m = 1000;

for (let i = 0; i < a; i++) {
  arrA.push(Math.round(Math.random() * (m - n) + n));
}
obj.arr = arrA;

console.log(obj);