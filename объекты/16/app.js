let n = +prompt(``);
let obj = {};
let flag;

for (let i = 0; i < n; i++) {
  obj[i] = prompt(``).trim().toLowerCase();
}
for (let key in obj) {
  if (obj[key] === `минск`) {
    flag = true;
    break;
  } else flag = false;
}

console.log(flag);