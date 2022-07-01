const btn = document.querySelector(".btn");
const res = document.querySelector(".res");
const arr = [];

const check = (val) => {
  if (val.value.length === 0) throw new Error("Empty string");
  if (!/^[a-zA-Zа-яёА-ЯЁ ]+$/g.test(val.value)) throw new Error("Not a words");
  return true;
};

btn.addEventListener("click", () => {
  try {
    const inp = document.querySelector(".inp");
    if (check(inp)) {
      arr.push(inp.value);
      res.innerHTML = arr;
      res.style.color = "black";
      inp.value = "";
    }
  } catch (er) {
    res.innerHTML = er.message;
    res.style.color = "red";
  }
});



// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');
// const inp = document.querySelector('.inp');
// let inpValue = [];

// const checkOfInp = (inp) => {
//     if (inp.value.length == 0) throw new Error('Вы не ввели ничего');
//     if (!/^[а-яА-Яa-zA-Z'']+$/g.test(inp.value)) throw new Error('Это не город');
//     return true;
// }

// btn.addEventListener('click', () => {
//     try {
//         if (checkOfInp(inp)) {
//             result.textContent = '';
//             inpValue.push(inp.value);
//             for (let i = 0; i < inpValue.length; i++) {
//                 const p = document.createElement("p");
//                 p.className = class-p${i};
//                 result.appendChild(p);
//                 document.querySelector(.class-p${i}).innerHTML = ${i+1}) ${inpValue[i]};
//             }
//             result.style = 'color: black';
//             inp.value = '';
//         }
//     } catch (error) {
//         result.innerHTML = error.message;
//         result.style = 'color: red';
//         inp.value = '';
//     }
// });