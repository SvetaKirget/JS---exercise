let user = {
  name: `Sveta`,
  age: 29,
  id: 10,
};
for (let num in user) {
  if (!isNaN(user[num]))
    if (user[num] % 2 === 0) {
      console.log(user[num]);
    }
}
console.log();
