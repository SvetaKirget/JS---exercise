const btn = document.querySelector(".btn");
const arr = [];
const res = document.querySelector(".res");

const check = (val) => {
  if (val < 0) throw new Error("Empty string");
  return true;
};

btn.addEventListener("click", () => {
  try {
    const inp = document.querySelector(".inp");
    if (check(inp)) {
      arr.push(inp.value);
      res.innerHTML = arr;
      inp.value='';
    }
  } catch (er) {
    res.innerHTML = er.message;
  }
});
