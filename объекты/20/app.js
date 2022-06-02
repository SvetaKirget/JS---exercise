const strA = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);
const strB = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);

const modifA = strA.split(``).sort().join();
const modifB = strB.split(``).sort().join();

let obj = {};

if (modifA === modifB) {
  obj.avg = true;
} else obj.avg = false;
console.log(obj);