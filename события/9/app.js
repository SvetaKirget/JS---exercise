const btn = document.querySelector(".btn");
const arr = [];

const check = (val) => {
  if (val.value.length === 0) throw new Error("Empty string");
  return true;
};

const res = document.querySelector(".res")
btn.addEventListener("click", () => {
  try {
    const inp = document.querySelector(".inp");
    if (check(inp)) {
      arr.push(inp.value);
      res.innerHTML = arr;
    } 
  } catch (er) {
    res.innerHTML = er.message;
  }
});
