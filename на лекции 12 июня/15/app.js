const someObject = {
  name: `Sveta`,
  age: 10,
  id: 2,
  number: 4,
};

const doubleOfNumberInObject = (object) => {
  const onlyNumber = [];
  for (let key in object) {
    !isNaN(object[key]) ? onlyNumber.push(object[key] * 2) : null;
  }
  return onlyNumber;
};

console.log(doubleOfNumberInObject(someObject));
