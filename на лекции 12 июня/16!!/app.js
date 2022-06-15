const somePalindrom = prompt(``).trim().toLowerCase();

const checkNumberOfString = (str) => {
  let countOfError = 0;
  if (!isNaN(str)) {
    countOfError++;
  } else null;
  if (countOfError === 0) return true;
  else throw new Error(`It's a number`);
};

const checkPalindrom = (str) => {
  try {
    let boolString = checkNumberOfString(str);
    let boolStringReverse = checkNumberOfString(str.split(``).reverse().join(``));
    if (boolString === boolStringReverse) return true;
    else throw new Error(`Different words`)
  } catch (er) {
    return er;
  }
};

console.log(checkPalindrom(somePalindrom));
