const btn = document.querySelector(".btn");
const arr = [];

const check = (val) => {
  if (val.value.length === 0) throw new Error("Empty string");
  if (val.value === /^[a-zA-Zа-яёА-ЯЁ ]+$/) throw new Error("Not a words");
  // if (val.value === /^[0-9]/) throw new Error("Not a words");
  return true;
};

const res = document.querySelector(".res");

btn.addEventListener("click", () => {
  try {
    const inp = document.querySelector(".inp");
    if (check(inp)) {
      arr.push(inp.value);
      res.innerHTML = arr;
      inp.value = "";
    }
  } catch (er) {
    res.innerHTML = er.message;
    res.style.color = "red";
  }
});
