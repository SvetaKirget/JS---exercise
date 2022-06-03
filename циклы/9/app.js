// первый вариант
let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let rez = [];
for (let i = 0; i < arr.length; i++) {
  if (rez.includes(arr[i])) continue;
  else rez.push(arr[i]);
}
console.log(rez);

// второй вариант
let arr1 = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let rez1 = [];
for (let i = 0; i < arr1.length; i++) {
  if (!rez1.includes(arr[i])) rez1.push(arr1[i]);
}
console.log(rez1);
