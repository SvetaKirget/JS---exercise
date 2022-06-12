const valueOne = +prompt(``);
const valueTwo = +prompt(``);
const valueThree = +prompt(``);
const valueFour = +prompt(``);
const valueFive = +prompt(``);

const newArray = [];

const pushInNewArray = (element) => {
  newArray.push(valueOne, valueTwo, valueThree, valueFour, valueFive);
  let bigArray = [];
  element.forEach((element) =>
    !isNaN(element) ? bigArray.push(element) : false
  );
  if (bigArray.length === 0)
    throw new Error(`There is a string inside the array`);
    else return true;
};

// доработать??

