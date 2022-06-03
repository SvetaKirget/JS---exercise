// 9  На входе 5 чисел. Из элементов составить массив. Далее необходимо вывести лишь уникальные значения массива. Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод только чисел после каждого введенного элемента. Использовать filter  ?????
const arr = [1, 2, 3, 3, 1].sort();
if (arr.length === 0) console.log(`arr is empty`);

for (let i = 0; i < arr.length; i++) {
  if (newArr.includes(arr[i])) continue;
  else newArr.push(arr[i]);
}

console.log(newArr);

arr.forEach((el) => {
  if (!newArr.includes(el)) newArr.push(el);
});
console.log();

// 2 способ
let arr1 = [].sort();
let newArr = [];
for (let i = 0; i < 5; i++) {
    const value = +prompt();
    (!isNaN(value)) ? arr1.push(value): console.log('nekkorectni vvod');
}
arr1.forEach(el => {
    if (!newArr.includes(el)) newArr.push(el);
})
console.log(newArr);