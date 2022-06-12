const array = [1, 2, 3, 4, 5, 6, 7, 8];
let checkArrayOfNum = (arrayNum) => {
  let countOfString = 0;
  for (let item of arrayNum) {
    !isNaN(item) ? true : ++countOfString;
  }
  if (countOfString > 0) throw new Error(`Есть строка`);
  else return true;
};

let doubleEachElements = (arrayOfNumbers) => {
  try {
    let boolCheckArrayOfNum = checkArrayOfNum(arrayOfNumbers);
    if (boolCheckArrayOfNum === true) {
      let doubleArray = [];
      for (let item of arrayOfNumbers) {
        doubleArray.push(item * 2);
      }
      return doubleArray;
    }
  } catch (err) {
    return err;
  }
};
console.log(doubleEachElements(array));
