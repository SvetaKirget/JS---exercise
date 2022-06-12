const newMail = `kirgetsveta@mail.com`;

const findMail = (str) => {
  try {
    if (/^[a-z0-9_-]+@[a-z0-9_-]+\.\w+$/g.test(str)) return true;
    else throw new Error(`Wrong`);
  } catch (er) {
    return er;
  }
};
console.log(findMail(newMail));
