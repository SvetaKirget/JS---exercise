const a = prompt(``);

const arrayAll = [].sort();
const arrMax = [];
const arrMin = [];

const pushArr = (array) => {
    for (let i = 0; i < a; i++) {
    arrayAll.push(prompt(``));
  }
  return arrayAll;
}

function arrayMaxMin(min, max) {
  return min - max;
}

let max = arrMax.push(arrayAll[arrayAll.length-1]);
let min = arrMin.push(arrayAll[0]);

console.log(min, max);
