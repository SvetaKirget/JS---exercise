const valueA = prompt(``).trim().toLowerCase();
const valueB = prompt(``).trim().toLowerCase();

const modifA = valueA.split(``).sort().join();
const modifB = valueB.split(``).sort().join();

rez = modifA === modifB ? "true" : "false";
console.log(rez);
