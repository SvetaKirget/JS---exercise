let user = {
    name: prompt(``).trim(),
    age: +prompt(``).trim(),
    birthday: prompt(``).trim(),
    status: prompt(``).trim(),
}
console.log(user);

let a = prompt(``);
let b = prompt(``);
let c = prompt(``);
let d = prompt(``);

// 2 variant
let user1 = {
  name: null,
  age: null,
  birthday: null,
  status: null,
};

if (isNaN(a) && isNaN(b) && isNaN(c) && isNaN(d)) {
    user1.name = a;
    user1.age = b;
    user1.birthday = d;
    user1.status = a;
}
console.log(user1);