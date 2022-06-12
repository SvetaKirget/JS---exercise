// На входе массив в виде JSON. Необходимо спарсить JSON. Далее проверить является ли это массив (тип данных объект). Также необходимо проверить, что все элементы массива числа. Если это числа, то отфильтровать и вывести только четные элементы. В противном случае исключение

const dataParse = JSON.parse(`[1, 2, 3, 4]`);

const checkOfArray = (array) => {
  if (typeof array === `object`) return true;
  else throw new Error(`not an object`);
};

const checkOfNumbers = (array) => {
  let countOfError = 0;
  for (let key of array) {
    isNaN(key) ? (countOfError += 1) : null;
  }
  if (countOfError === 0) return true;
  else throw new Error(`it's a string`)
};

const checkOfNumberInArray = (array) => {
  let newArray = [];
  let boolOfNumbers = checkOfNumbers(array)
  let boolOfArray = checkOfArray(array);
  if (boolOfArray && boolOfNumbers) {
    for (let el of array) {
      el % 2 === 0 ? newArray.push(el) : null;
    }
    return newArray;
  }
};
console.log(checkOfNumberInArray(dataParse));
