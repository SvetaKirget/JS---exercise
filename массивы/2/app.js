let obj = {
  name: `Sveta`,
  age: 29,
  id: 10,
};

for (let keys in obj) {
  keys === `age` ? console.log(`YES`) : console.log(`NO`);
}
