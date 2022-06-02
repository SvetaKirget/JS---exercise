// 11. На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и false в противном случае

const str = prompt(``).trim().toLowerCase();

function strCheck(test) {
  return test === test.split(``).reverse().join("") ? true : false;
}
let out = strCheck(str);
console.log(out);
