const btn = document.querySelector(`.btn`);
const inp = document.querySelector(`.inp`);

btn.addEventListener(`click`, () => {
  alert(inp.value);
});
