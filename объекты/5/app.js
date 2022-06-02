let user = {
    name: `Sveta`,
    age: 29,
    id: 10,
    a: 1,
    b: 3,
  },
  arr = [];

  for(let key in user) {
      if (!isNaN(user[key]) && user[key] %2 !=0) arr.push(user[key])
  }