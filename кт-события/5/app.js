const btn = document.querySelector(".btn");
const res = document.querySelector(".result");

const checkValue = (inp1, inp2) => {
  if (inp1.length === 0 || inp2.length === 0) throw new Error("Empty String");
  if (!/^[a-zA-Zа-яёА-ЯЁ ]+$/g.test(inp1) || !/^[a-zA-Zа-яёА-ЯЁ ]+$/g.test(inp2)) throw new Error(`It's a number`);
  return true;
};

btn.addEventListener("click", () => {
  try {
    const input1 = document.querySelector(".input1").value.trim().toLowerCase();
    const input2 = document.querySelector(".input2").value.trim().toLowerCase();
    const callCheck = checkValue(input1, input2);
    if (callCheck) {
      if (input1.split("").sort().join("") === input2.split("").sort().join("")){
        res.innerHTML = "It`s an anagramm";
      } else throw new Error("It`s not an anagramm ");
    }
  } catch (er) {
    res.innerHTML = er.message;
  }
});
