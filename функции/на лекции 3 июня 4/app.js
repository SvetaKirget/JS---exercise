const str = `Web Development Tutorial`.split(` `);

let findLongStr = (el) => {
  let val = el[0];
  el.forEach((element) => element.length > val.length ? (val = element) : null);
  return val;
};

console.log(findLongStr(str));
