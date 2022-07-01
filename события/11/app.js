const btn = document.querySelector(".btn");
const arr = [];

const check = (val) => {
  if (val.value.length === 0) throw new Error("Empty string");
  if (!/^[a-zA-Zа-яёА-ЯЁ ]+$/g.test(val.value)) throw new Error("Not a words");
  return true;
};

const res = document.querySelector(".res");

btn.addEventListener("click", () => {
  try {
    const inp = document.querySelector(".inp");
    if (check(inp)) {
      arr.push(inp.value);
      res.innerHTML = arr;
      res.style.color = "black";
      inp.value = "";
    }
  } catch (er) {
    res.innerHTML = er.message;
    res.style.color = "red";
  }
});
