const dataParse = JSON.parse(`[1, 2, 3, "str"]`);

const isArray = (dParse) => {
  if (typeof dParse === `object`) return true;
  else throw new Error(`It's not an array`);
};

const isArrayOfNumber = (array) => {
  let countOfError = 0;
  array.forEach((element) => (!isNaN(element) ? true : (countOfError += 1)));
  if (countOfError > 0) throw new Error(`There is a string inside the array`);
  else return true;
};

const findEvenNumbers = (array) => {
  try {
    let boolIsArray = isArray(array);
    let boolIsArrayOfNumber = isArrayOfNumber(array);
    if (boolIsArray == true && boolIsArrayOfNumber == true)
      return array.filter((element) => element % 2 === 0);
  } catch (err) {
    return err;
  }
};

console.log(findEvenNumbers(dataParse));
