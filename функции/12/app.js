// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и false в противном случае

const test = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);
const test_2 = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);

function anagram(param1, param2) {
  let checkA = param1.split(``).sort().join();
  let checkB = param2.split(``).sort().join();
  return checkA === checkB ? true : false;
}

console.log(anagram(test, test_2));
