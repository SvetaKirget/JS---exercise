const someAdress = `C:/home/user/dir/file.txt`;

const validateAdress = (str) => {
  if (!str.includes(`/`)) throw new Error(`Неверный путь`);
  if (/^[a-zA-Z0-9\/:_\- ]+\.[a-z]+$/g.test(str)) return true;
  else throw new Error(`путь не содержит файла`);
};

const findFile = (str) => {
  try {
    if (validateAdress(str)) {
      const fileName = str.split(`/`);
      return fileName[fileName.length - 1];
    }
  } catch (er) {
    return er;
  }
};

console.log(findFile(someAdress));
