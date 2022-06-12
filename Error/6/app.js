const number = 10;

const isArrayOfNumber = (array) => {
  let countOfError = 0;
  array.forEach((element) => (!isNaN(element) ? true : (countOfError += 1)));
  if (countOfError > 0) throw new Error(`There is a string inside the array`);
  else return true;
};

const findRightNumbers = (array) => {
  let rightNumbers = array.filter((el) => el > 10 && el <= 100);
  return rightNumbers;
};

const findOfSomeNumber = (element) => {
  try {
    let arrayForNumbers = [];
    for (let p = 0; p < element; p++) {
      arrayForNumbers.push(Math.round(Math.random() * 100));
    }
    if (isArrayOfNumber(arrayForNumbers) === true) {
      let rez = findRightNumbers(arrayForNumbers);
      return rez;
    }
  } catch (er) {
    return er;
  }
};

console.log(findOfSomeNumber(number));
