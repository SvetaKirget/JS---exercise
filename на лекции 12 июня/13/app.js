const obj = {
  name: `Sveta`,
  age: 29,
  id: 1,
};

const sumOfKeys = (object) => {
  let rezultInObject = 0;
  for (let key in object) !isNaN(object[key]) ? (rezultInObject += 1) : null;
  return rezultInObject;
};

let rezult = sumOfKeys(obj);
console.log(rezult);
