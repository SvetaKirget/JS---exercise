const str = `Web Development Tutorial`.split(` `);

let findLongStr = (el) => {
  let val = el[0];
  el.forEach((element) =>
    element.length > val.length ? (val = element) : null
  );
  return val;
};

console.log(findLongStr(str));

let input = `Web Development Tutorial`;
let longWord = (el) => {
  set = set.split(` `);
  let out = set[0];
  set.forEach((element) => {
    element.length > out.length ? (out = element) : null;
  });
  return out;
};
console.log(longWord(input));
