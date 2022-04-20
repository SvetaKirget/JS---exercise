const text = prompt();
let num = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] === text[i].toLowerCase() && !Number(text[i])) {
    num++;
  }
}
console.log(num);
