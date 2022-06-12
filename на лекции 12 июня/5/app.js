const arr = [`hello`, `hanna`, `and`, `dasha`];

const checkOfArray = (array) => {
  let sumOfStrInArray = 0;
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) sumOfStrInArray += 1;
  }
  if (sumOfStrInArray === 0) return true;
  else throw new Error(`Not a String`);
};

const mainFunction = (array) => {
  try {
    const boolOfCheckArray = checkOfArray(array);
    if (boolOfCheckArray) return array.join(` `);
  } catch (er) {
    return er;
  }
};
console.log(mainFunction(arr));
