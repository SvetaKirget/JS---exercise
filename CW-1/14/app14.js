const a = +prompt(``);
const b = +prompt(``);
const c = +prompt(``);
const d = +prompt(``);
const e = +prompt(``);

if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
  console.log(`Ошибка ввода`);
} else {
  a % 2 === 0 ? console.log(`${a} - чет`) : console.log(`${a} - неч`);
  b % 2 === 0 ? console.log(`${b} - чет`) : console.log(`${b} - неч`);
  c % 2 === 0 ? console.log(`${c} - чет`) : console.log(`${c} - неч`);
  d % 2 === 0 ? console.log(`${d} - чет`) : console.log(`${d} - неч`);
  e % 2 === 0 ? console.log(`${e} - чет`) : console.log(`${e} - неч`);
}
