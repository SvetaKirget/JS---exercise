// 3 Имеется массив объектов. Получите из этого массива объект, где name === "Bob" и сохраните это в какой-либо переменной
const arr = [
  {
    name: `Jack`,
  },
  {
    name: `Joe`,
  },
  {
    name: `John`,
  },
  {
    name: `Bob`,
  },
];
let newArr = arr.filter((el) => el.name === `Bob`);
console.log(newArr);
