const somePalindrom = prompt(``).trim().toLowerCase();

const checkNumberOfString = (str) => {
  if (!isNaN(str)) throw new Error(`It's a number`);
  return true;
};

const checkPalindrom = (str) => {
  try {
    if (checkNumberOfString(str)) {
      if (str === str.split(``).reverse().join(``)) return true;
      else throw new Error(`Different words`);
    }
  } catch (er) {
    return er;
  }
};

console.log(checkPalindrom(somePalindrom));
