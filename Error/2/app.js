const anyValue = 54;

const checkIsNanOfValue = (value) => {
  if (isNaN(value)) throw new Error(`It's a string`);
  else return anyValue;
};

const checkNumberOfValue = (value) => {
  try {
    let number = checkIsNanOfValue(value);
    if (number % 2 === 0) return value;
    else throw new Error(`Нечётное число`);
  } catch (e) {
    return e;
  }
};

console.log(checkNumberOfValue(anyValue));
