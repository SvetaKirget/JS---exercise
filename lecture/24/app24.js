let height = prompt();
let length = 19;
let rez = "";

for (let i = 0; i < height; i++) {
  for (let j = 0; j < length; j++) {
    rez += "*";
  }
  rez += "\n";
}
console.log(rez);
