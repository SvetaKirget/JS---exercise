// 6 На вход подается объект. Необходимо посчитать количество пар (ключ: значение) где значение число и вывести их количество
const obj = {
  age: 13,
  name: `Yanis`,
  id: 19,
};
n = 0;
for (let val in obj) {
  n += 1;
}

console.log(n);
