const someArray = [10, 20, 30, 50, 235, 3000];

const checkArrayIfNumber = (array) => {
  const stringInArray = 0;
  for (let key of array) {
    if (isNaN(key)) stringInArray += 1;
  }
  if (stringInArray === 0) return true;
  else throw new Error(`It's a string`);
};

const someNumberInArray = (array) => {
  try {
    
  } catch (er) {
    return er;
  }
};
