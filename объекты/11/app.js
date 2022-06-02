const user = {
  a: 1,
  v: 8,
  b: `jhg`,
};
let rez = 0;
for (let key in user) {
  if (!isNaN(user[key])) {
      rez += 1;
}
}
console.log(rez);