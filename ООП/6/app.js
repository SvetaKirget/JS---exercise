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

  isURL = (url) => {
    try {
      if (url.length === 0) throw new Error(`Empty string`);
      if (!/^(http|https):\/\/[a-zA-Z]+\.[a-z]+$/g.test(url))
        throw new Error(`It's not a URL-adress`);
      return true;
    } catch (er) {
      return er.message;
    }
  };
}

const validator = new Validator();
console.log(validator.isEmail(`kirgetsveta@gmail.com`));
console.log(validator.isURL(`https://github.com`));
