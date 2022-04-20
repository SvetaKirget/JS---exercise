const str = prompt("");
let firstArr = str.split(" ")[0];
let secondArr = str.split(" ")[1];

if (
  firstArr[0] === firstArr[0].toUpperCase() &&
  secondArr[0] === secondArr[0].toUpperCase()
) {
  console.log("YES");
} else {
  console.log("NO");
}
