const someArray = [10, 20, 30, 40, 50];

const checkNumberOrString = (array) => {
  let countError = 0;
  for (let i = 0; i < array.length; i++) {
    !isNaN(array[i]) ? true : (countError += 1);
  }
  if (countError > 0) {
    throw new Error(`It's a string`);
  } else return true;
};

const sumOfEachElements = (array) => {
  try {
    const bool = checkNumberOrString(array);
    if (bool) {
      let sum = 0;
      array.forEach((element) => {
        sum += element;
      });
      return sum;
    }
  } catch (er) {
    return er;
  }
};

console.log(sumOfEachElements(someArray));
