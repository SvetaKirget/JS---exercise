const someString = `hschool`;

const checkStringOrNumber = (str) => {
  if (!isNaN(str)) {
    return str % 2 === 0 ? `Chet` : `Nechet`;
  } else {
    return str === `hschool` ? true : false;
  }
};

console.log(checkStringOrNumber(someString));
