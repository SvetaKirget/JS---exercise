const dataParse = JSON.parse(
  `[{"name":"John", "age": 30}, {"name":"Bob", "age": 21}, {"name":"Anna", "age": 19}]`
);

const isObject = (dParse) => {
  if (typeof dParse === "object") return true;
  else throw new Error(`It's not an array`);
};

const findItemInRange = (array) => {
  try {
    if (isObject(array)) {
      let outArray = array.filter((element) => element["age"] > 20);
      if (outArray.length > 0) return outArray;
      else throw new Error(`There is not a key > 20`);
    }
  } catch (err) {
    return err;
  }
};
console.log(findItemInRange(dataParse));
