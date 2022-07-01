const img = document.querySelector(".img");

img.addEventListener("mouseover", () => {
  img.style = ` background-image: url(./2.jpg);
    width: 200px;
    height: 200px;
    background-size: cover;`;
});

img.addEventListener("mouseout", () => {
  img.style = ` background-image: url(./1.jpg);
    width: 200px;
    height: 200px;
    background-size: cover;`;
});
