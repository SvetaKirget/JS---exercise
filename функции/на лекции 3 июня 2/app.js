const value = `Anna`.toLowerCase();

const findPalindrom = (word) => {
  return word === word.split(``).reverse().join(``) ? true : false;
};
console.log(findPalindrom(value));
