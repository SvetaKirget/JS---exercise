// 4 Удалите из массива объектов объект с name == "Anna". На выходе мы должны получить новый из двух элементов объектов без объекта, в котором ключ name == "Anna".
const obj = [
  {
    name: `Anna`,
  },
  {
    name: `Joe`,
  },
  {
    name: `Bob`,
  },
];

const objSec = obj.filter((el) => el.name !== `Anna`);
console.log(objSec);
