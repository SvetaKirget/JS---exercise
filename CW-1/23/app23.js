const a = prompt(``).trim().toLowerCase();

if (isNaN(a)) {
  const b = [`а`, `е`, `и`, `о`, `у`, `ы`, `ё`, `э`, `я`, `ю`];
  let rez = 0;
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      rez++;
    }
  }
  console.log(rez);
} else console.log(`Ошибка ввода`);
