const btn = document.querySelector(`.btn`);
const inp = document.querySelector(`.inp`);

btn.addEventListener(`click`, () => {
  try {
    alert(inp.value);
  } catch (er) {}
});





// const checkNumber = (num) => {
//     if (num < 0) throw new Error(`Error`);
//     return true;
//   };

//   btn.addEventListener(`click`, () => {
//     try {
//       const inp = document.querySelector(`.inp`).value;
//       if (checkNumber(inp)) {
//         let array = [0, 1];
//         for (let i = 2; i < inp; i++) {
//           array.push(array[i - 1] + array[i - 2]);
//         }
//         res.innerHTML = array;
//       }
//     } catch (er) {
//       res.innerHTML = er.message;
//     }
//   });
