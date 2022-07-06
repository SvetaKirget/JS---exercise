class Validator {
  isEmail = (email) => {
    try {
      if (email.length === 0) throw new Error(`Empty string`);
      if (!/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/g.test(email))
        throw new Error(`Неккоректная запись`);
      return true;
    } catch (er) {
      return er.message;
    }
  };
}

const validator = new Validator();
console.log(validator.isEmail(`kirgetsveta@gmail.com`));
