const someObject = {
  name: `Sveta`,
  age: 10,
  id: 2,
  number: 4,
};

const doubleOfNumberInObject = (object) => {
  const onlyNumber = [];
  for (let key in object)
    if (!isNaN(object[key])) {
      return onlyNumber.push(object[key] * 2);
    }
};

console.log(doubleOfNumberInObject(someObject));

