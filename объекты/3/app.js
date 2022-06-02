let user = {
  name: `Sveta`,
  age: 29,
  id: 10,
};
for (let num in user) {
  if (!isNaN(user[num])) {
    console.log(user[num]);
  }
}