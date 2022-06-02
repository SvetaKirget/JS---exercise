let user = {
    name: `Sveta`,
    2: 29,
    4: 10,
  },
  arr = [];
for (let key in user) {
  !isNaN(user[key]) ? arr.push(user[key] ** 2) : null;
}
