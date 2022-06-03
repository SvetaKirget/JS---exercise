let value = 123;
function reverseVal(param) {
  param = String(param);
  let rez = "";
  for (let i = param.length - 1; i >= 0; i--) {
    rez += param[i];
  }
  return rez;
}
let out = reverseVal(value);
console.log(out);
