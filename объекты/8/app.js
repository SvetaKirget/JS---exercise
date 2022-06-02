let user = {
  name: `Sveta`,
  age: `29`,
  4: `10`,
  test: `Hi`,
};
let str = ``;
for (let key in user) {
  if (isNaN(user[key])) {
    str += user[key];
  }
}
console.log(str);