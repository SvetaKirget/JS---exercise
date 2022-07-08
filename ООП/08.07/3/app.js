class Html {
  renderArr = (array, selector) => {
    const arr = document.querySelector(selector);
    arr.innerHTML = array;
  };
}

const html = new Html();
html.renderArr(["Minsk", "Brest", "Vitebsk"], ".arr");
