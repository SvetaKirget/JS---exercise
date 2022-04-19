let str = prompt("Введите текст");
let arr = str.split("_");
// let arrA = arr.join
let rez = "";

for (let i = 1; i < arr.length; i++) {
 rez += arr[i][0].toUpperCase() + arr[i].slice(1) + " "
}
 console.log(rez);