const a = prompt(``).trim();
let b = a.replace(/( |<([^>]+)>)/ig, ` `);
console.log(b);
