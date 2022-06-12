const value = `Hello, World`;

const checkValue = (paramValueStr) => {
  try {
    if (isNaN(paramValueStr)) return paramValueStr;
    else throw new Error(`Not String - Number!`);
  } catch (err) {
    return err;
  }
};
console.log(checkValue(value));
