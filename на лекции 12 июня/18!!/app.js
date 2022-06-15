const someNumber = +prompt();

const checkNumberOfString = (num) => {
  let countOfError = 0;
  if (isNaN(num)) {
    countOfError++;
  } else null;
  if (countOfError === 0) return true;
  else throw new Error(`It's a string`);
};

const showFibonachi = (num) => {
  try {
    let boolCheck = checkNumberOfString(num);
    if (boolCheck) {
      const arr = [0, 1];
      for (let i = 2; i < num; i++) {
        return arr.push(arr[i - 1] + arr[i - 2]);
      }
    }
  } catch (er) {
    return er;
  }
};

console.log(showFibonachi(someNumber));
