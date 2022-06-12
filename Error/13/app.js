const newPassword = `908lkjk-:;rhrusi86567`;
const checkPassword = (str) => {
  try {
    if (str.length >= 8) return `*`.repeat(str.length);
    else throw new Error(`Вы ввели меньше 8 символов`);
  } catch (er) {
    return er;
  }
};
console.log(checkPassword(newPassword));
