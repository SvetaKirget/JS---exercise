const inp_1 = document.querySelector(".inp-1");
const inp_2 = document.querySelector(".inp-2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let newInput = inp_2.value;
  inp_2.value = inp_1.value;
  inp_1.value = newInput;
});
