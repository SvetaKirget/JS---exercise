let input = `Lowertrip`.toLowerCase().split(``);
let vowel_count = (set) => {
  let vowels = [`e`, `o`, `a`, `u`, `i`];
  let count = 0;
  set.forEach((element) => (vowels.includes(element) ? (count += 1) : null));
  return count;
};
console.log(vowel_count(input));