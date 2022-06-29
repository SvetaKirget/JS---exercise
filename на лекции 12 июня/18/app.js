const someNumber = +prompt();

const checkNumberOfString = (num) => {
  if(isNaN(num)) throw new Error(`It's a string`);
  return true;
};

const showFibonachi = (num) => {
  try {    
    if (checkNumberOfString(num)) {
      const arr = [0, 1];
      for (let i = 2; i < num; i++) {
       arr.push(arr[i - 1] + arr[i - 2]);
      }
      return arr;
    }
  } catch (er) {
    return er;
  }
};

console.log(showFibonachi(someNumber));
