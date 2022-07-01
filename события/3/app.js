const btn = document.querySelector(".btn");

const check = (inp) => {
  if (inp < 0) throw new Error("Отрицательное число");
  return true;
};

btn.addEventListener("click", () => {
  try {
    const inp = document.querySelector(".inp");
    if (check(inp)) {
      const result = document.querySelector(".result");
      result.innerHTML = `Результат: ${inp.value * 2}`;
    }
  } catch (er) {
    return er;
  }
});
