const a = prompt(``);
let rez = 0;

for (let i = 0; i < a.length; i++) {
  rez += Number(a[i]);
}
console.log(rez);
