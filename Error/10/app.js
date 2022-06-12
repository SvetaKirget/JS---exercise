const someStringAdress = `https://github.com`;

const checkOfStringAdress = (str) => {
  try {
    if (/^(http|https):\/\/[a-zA-Z]+\.[a-z]+$/g.test(str)) return true;
    else throw new Error(`wrong adress`);
  } catch (er) {
    return er;
  }
};

console.log(checkOfStringAdress(someStringAdress));
