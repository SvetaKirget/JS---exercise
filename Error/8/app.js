const newMail = `kirgetsveta@gmail.com`;

const findSimbol = (str) => {
  try {
    if (str.includes(`@`)) return true;
    else throw new Error(`Not found - @`);
  } catch (error) {
    return error;
  }
};

console.log(findSimbol(newMail));
