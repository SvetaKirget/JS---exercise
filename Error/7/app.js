const n = +prompt(``);

const pushInNewArray = (element) => {
  let newArray = [];
  for (let i = 0; i < element; i++) newArray.push(+prompt(``));
  return newArray;
};

const checkStringOrNumber = (element) => {
  try {
    let arr = pushInNewArray(element);
    let newArr = arr.filter((el) => !isNaN(el));
    if (newArr === 0) throw new Error(`Not Found a number`);
    return newArr;
  } catch (er) {
    return er;
  }
};

console.log(checkStringOrNumber(n));
