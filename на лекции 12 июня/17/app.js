const test = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);
const test_2 = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);

const checkAnargam = (str_1, str_2) => {
  try {
    let checkStringOne = str_1.split(``).sort().join();
    let checkStringTwo = str_2.split(``).sort().join();

    if (checkStringOne === checkStringTwo) return true;
    else throw new Error(`Not anargram`);
  } catch (er) {
    return er;
  }
};

console.log(checkAnargam(test, test_2));
