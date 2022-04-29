const valueA = +prompt(``);
const valueB = +prompt(``);
const valueC = +prompt(``);

let arr = [valueA, valueB, valueC];
let rez = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    rez += arr[i];
  }
}
console.log(rez);
