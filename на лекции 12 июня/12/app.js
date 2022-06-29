const someArray = [10, 20, 30, 50, 235, 3000];

const checkArrayIfNumber = (array) => {
  const stringInArray = 0;
  for (let key of array) {
    if (isNaN(key)) stringInArray += 1;
  }
  if (stringInArray > 0) throw new Error(`It's a string`);
  return true;
};

const toString = (array) => array.map((el) => String(el));

const someNumberInArray = (array) => {
  try {
    if (checkArrayIfNumber(array) === true) {
      return toString(array).filter(
        (el) => el[0] === `1` || el[0] === `2` || el[0] === `5`
      );
    }
  } catch (er) {
    return er;
  }
};

console.log(someNumberInArray(someArray));
