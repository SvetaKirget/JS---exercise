const personName = `Киргет Светлана Николаевна`;

const checkPersonName = (str) => {
  const splitPersonName = str.split(` `);
  if (splitPersonName.length === 3) return true;
  else throw new Error(`Wrong length`);
};

const checkNameInPersonName = (str) => {
  try {
    const boolCheck = checkPersonName(str);
    if (boolCheck || /^[a-zA-Z]+$/g.test(str)) return true;
    else throw new Error(`Wrong name`);
  } catch (er) {
    return er;
  }
};

console.log(checkNameInPersonName(personName));
