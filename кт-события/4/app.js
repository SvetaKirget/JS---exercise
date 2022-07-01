const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const checkPalindrom = (value) => {
  if (value.length === 0) throw new Error("Empty String");
  if (!/^[a-zA-Zа-яА-Я]+$/g.test(value)) throw new Error("False");
  return true;
};

btn.addEventListener("click", () => {
  try {
    const inp = document.querySelector(".inp").value.toLowerCase().trim();
    const check = checkPalindrom(inp);
    if (check) {
      if (inp.split("").reverse().join("") !== inp)
        throw new Error("Это не палиндром!");
      result.innerHTML = "Это палиндром!";
    }
  } catch (er) {
    result.innerHTML = er.message;
  }
});
