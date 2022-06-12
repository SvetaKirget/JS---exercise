let input = `hannapleshko@mail.ru`;
let mailCheck = (mail) => {
  try {
    if (mail.includes(`@`)) return true;
    else throw new Error(`Указанная строка не является адресом`);
  } catch (er) {
    return er;
  }
};
console.log(mailCheck(input));
