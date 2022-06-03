let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort(),
  i = 0,
  rez = [];
while (i < arr.length) {
  if (!rez.includes(arr[i])) rez.push(arr[i]);
  i++;
}
console.log(rez);
