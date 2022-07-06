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

  isDate = (date) => {
    try {
        if (date.length === 0) throw new Error(`Empty string`);
        // if (isNaN(date)) throw new Error(`It's not a date`);
        if (!/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/g.test(date)) throw new Error(`Некорректный ввод`);
        return true;
    } catch (er) {
        return er.message;
    }
  };

  isPhone = (phone) => {
    try {
        if (phone.length === 0) throw new Error(`Empty string`);
        if(!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){4,14}$/g.test(phone)) throw new Error(`Not a telephone number`)
        return true;
    } catch (er) {
      return er.message;
    }
  };
}

const validator = new Validator();
console.log(validator.isEmail(`kirgetsveta@gmail.com`));
console.log(validator.isURL("https://github.com"));
console.log(validator.isDate(`11.22.3333`));
console.log(validator.isPhone(`+37529 568-94-71`));
