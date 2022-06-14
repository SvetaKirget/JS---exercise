const obj = {
  name: `Sveta`,
  age: 29,
  id: 1,
};

const sumOfKeys = (object) => {
  const rezultInObject = 0;
  for (let key in object) 
  object[key] ? rezultInObject += 1 : null;
};
 
let rezult = sumOfKeys(obj)
console.log(rez);
