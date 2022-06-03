// 14 Напишите все возможные способы обращения к первому элементу и последнему
const arr = [`test`, `test_0`, `test-1`];
console.log(arr[0], arr[arr.length - 1]);

const arr1 = [`test`, `test_0`, `test-1`] [0];
console.log(arr1);

// обращение к последнему
console.log(arr[2]);
console.log(arr[arr.length - 1]);

for (let i = 0; i <= arr.length; i++) {
  if (i === 0 || i === arr.length - 1) 
  console.log(arr[i]);
}
