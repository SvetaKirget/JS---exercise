const btn = document.querySelector(".mainBtn");
let flag = false;

btn.addEventListener("click", () => {
  if (flag === true) {
    btn.slyle = "backgroud-color: white;";
    flag = false;
  } else {
    btn.style = "background-color: yellow;";
    flag = true;
  }
});
