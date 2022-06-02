const obj = {
  Коля: 1000,
  Вася: 500,
  Петя: 200,
  Даша: 4000,
  Наташа: 600,
};

const arr = Object.keys(obj);
const value = Object.values(obj);
let array = [];

for (let i = 0; i<arr.length; i++) {
  if (arr[i] == `Даша` || arr[i] == `Вася`) {
    array.push(value[i])
  }
}

console.log(array);