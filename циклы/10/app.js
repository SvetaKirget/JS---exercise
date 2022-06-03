let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let rez = [];
for (let i of arr) {
  if (!rez.includes(i)) rez.push(i);
}
console.log(rez);
