// 10 На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее необходимо сравнить данные 2 массива. Если они идентичны, то вывести булевое true, в противном случае false. Добавить проверку на ввод пустой строки, лишних пробелов после каждого введенного элемента

let arr1 = [];
let arr2 = [];

for (let i = 0; i <= 10; i++) {
  if (i > 5) {
    const valueA = +prompt(``);
    arr1.push(valueA);
  }
  if (i < 5) {
    const valueB = +prompt(``);
    arr2.push(valueB);
  }
}

if (arr1.join(``) === arr2.join(``)) console.log(true);
else console.log(false);
