const a = prompt(``).trim().toLowerCase();
const b = [`a`, `e`, `i`, `o`, `u`];
let rez = 0;

for (let i = 0; i < a.length; i++) {
  if (b.includes(a[i])) {
    rez++;
  }
}
console.log(rez);
