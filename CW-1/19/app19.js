const a = +prompt(``);
const b = +prompt(``);
const c = +prompt(``);

if (a === b && b === c && c === a) {
  console.log(`Равносторонний`);
} else if (a === b || a === c || b === c) {
  console.log(`Равнобедренный`);
} else console.log(`Разносторонний`);
