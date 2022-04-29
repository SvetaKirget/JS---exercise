const year = +prompt(``);
(year % 4 === 0 && year % 100 != 0) || year % 400 === 0
  ? console.log(`YES`)
  : console.log(`NO`);
