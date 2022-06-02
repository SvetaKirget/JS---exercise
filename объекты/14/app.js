let obj = {};

let n = +prompt(``);
let arr = [];
let rez = 0;
for (let i = 0; i < n; i++) {
  arr.push(+prompt());
  rez += arr[i];
}

obj.avg = rez / n;
console.log(obj);
