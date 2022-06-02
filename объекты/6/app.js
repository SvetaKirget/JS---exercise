let user = {
  name: `Sveta`,
  age: 29,
  id: 10,
};
for (let key in user) if (!isNaN(user[key])) console.log(user[key] * 2);
