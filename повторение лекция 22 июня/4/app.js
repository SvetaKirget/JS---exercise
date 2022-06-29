const btn = document.querySelector(`.btn`);

const checkEmptyString = (str) => {
  if (str.length < 0) throw new Error(`Epmty String`);
  return true;
};

btn.addEventListener(`click`, () => {
  try {
    const inp = document.querySelector(`.inp`);
    if (checkEmptyString(inp)) alert(inp.value.trim());
  } catch (er) {
    alert(er.message);
  }
});
