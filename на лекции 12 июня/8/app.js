// На входе есть пароль, который пользователь вводит с клавиатуры.	Требования:	1. Пароль должен содержать не менее 8 символов	В блоке try/catch при обработке пароля необходимо бросить исключение, если в пароле меньше 8 символов. 	Если пароль корректный, то вывести *, где одна *- один символ. Пример: 12345678 -> *******. Pass -> исключение

const newPassword = `26n_;fhgj;rhrurhusi8765`;
const checkPassword = (str) => {
  try {
    if (str.length >= 8) return `*`.repeat(str.length);
    else throw new Error(`Вы ввели меньше 8 символов`);
  } catch (er) {
    return er;
  }
};
console.log(checkPassword(newPassword));

