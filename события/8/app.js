const btn = document.querySelector(".btn");
const arr = [];

btn.addEventListener("click", () => {
  const inp = document.querySelector(".inp").value;
  arr.push(inp);
  document.querySelector(".res").innerHTML = arr;
});
