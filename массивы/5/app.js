// 5 Необходимо пройтись по всем age и удвоить каждое значение. На выходе мы должны получить новый массив объектов такого же вида, но с удвоенным age
// const arr = [{ age: 13 }, { age: 19 }, { age: 20 }];

// const newArr = arr.map((el) => {
//   age: el.age * 2;
// });
// console.log(newArr);

const obj = [
  { age: 13, name: `Yanis` },
  { age: 19, name: `Hanna` },
  { age: 20, name: `Eva` },
];
const newArr = obj.map((element) => {
  element.age = element.age * 2;
  return element;
});
console.log(newArr);
