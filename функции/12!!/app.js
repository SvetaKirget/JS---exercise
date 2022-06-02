// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и false в противном случае

const test = prompt(``).trim().toLowerCase().replace(/[^a-zа-яё]/g, ``);
const test_2 = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);

let checkA = test_1.split(``).sort().join();
let checkB = test_2.split(``).sort().join();


function anagram(param) {
    return checkA === checkB ? true : false
}


console.log();
