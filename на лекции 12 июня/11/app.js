//  На вход подается строка в виде пути открытия файла, например, '/home/user/dir/file.txt'. Необходимо вернуть имя файла (подстрока после последнего символа "\" ) из полного пути к файлу('file.txt'). Если же пользователь ввел некорректный путь – исключение.	Путь считается некорректным, если:	1. В нем больше 1 файла не отделены знаком /	2. Конечный файл не содержит расширения

const input = `C:/home/user/dir/file.txt`;

const findFileInRoute = (route) => {
  try {
    if (validateRoute(route)) {
      const fileName = route.split(`/`);
      return fileName[fileName.length - 1];
    }
  } catch (er) {
    return er;
  }
};

const validateRoute = (route) => {
  if (!route.includes(`/`)) throw new Error(`Неверный путь`);
  if (/^[a-zA-Z0-9\/:_\- ]+\.[a-z]+$/g.test(route)) return true;
  else throw new Error(`путь не содержит файла`);
};
console.log(findFileInRoute(input));
