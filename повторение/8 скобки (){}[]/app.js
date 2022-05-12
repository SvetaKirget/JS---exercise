const a = `()()()`;
let rezA = 0;
let rezB = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] === `(`) {
    rezA++;
  } else if (a[i] === `)`) {
    rezB++;
  }
}
console.log((rezA === rezB ? true : false));
