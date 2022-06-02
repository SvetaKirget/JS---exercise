let obj = {
  a: +prompt(``),
  b: +prompt(``),
  c: +prompt(``),
  d: +prompt(``),
  e: +prompt(``),
};
let arr = [];
for (let key in obj) {
    arr.push(obj[key])
}
console.log(arr);