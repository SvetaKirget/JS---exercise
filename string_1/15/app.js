const a = prompt();
let arr = a.split("");
let rez = " ";

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0].toUpperCase() === arr[i][0]) {
    rez += arr[i][0].toLowerCase();
  } else {
    rez += arr[i][0].toUpperCase();
  }
}
console.log(rez);
