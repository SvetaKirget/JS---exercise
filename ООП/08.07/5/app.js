class Html {
  renderArr = (selector, array) => {
    const findSelector = document.querySelector(selector);
    const arr = array;
     for (let i = 0; i < array.length; i++) {
      const p = document.createElement("p");
      p.className = `element${i}`;
      findSelector.appendChild(p);
      document.querySelector(`.element${i}`).innerHTML = `${arr[i]}`;
    }
  };
}

const html = new Html();
html.renderArr(".res", [
  "Minsk",
  "Brest",
  "Vitebsk",
  "Minsk",
  "Brest",
  "Vitebsk",
  "Minsk",
  "Brest",
  "Vitebsk",
  "Minsk",
]);
