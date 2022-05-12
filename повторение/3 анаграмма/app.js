const valueA = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);
const valueB = prompt(``)
  .trim()
  .toLowerCase()
  .replace(/[^a-zа-яё]/g, ``);

const modifA = valueA.split(``).sort().join();
const modifB = valueB.split(``).sort().join();

rez = modifA === modifB ? "true" : "false";
console.log(rez);
