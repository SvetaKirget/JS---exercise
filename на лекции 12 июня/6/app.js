const arrayOfNumbers = [1, 2, 3, 3, 1, 2, 5];

const checkNumber = (array) => {
  let countError = 0;
  for (let i of array) {
    !isNaN(i) ? true : ++countError;
  }
  if (countError > 0) {
    throw new Error(`Not a Number`);
  } else {
    return true;
  }
};

let unicValueOfArray = (arrayValues) => {
  let currentElements = [];
  let boolCheck=
  for(let i of arrayValues) {
    if (!currentElements.includes(i)) {
       currentElements.push(i);
    }
  }
};

console.log(un);
