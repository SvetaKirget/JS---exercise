let base = [
  { id: "javascript", label: "Javascript", category: "programmingLanguages", priority: 1 },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  { id: "c++", label: "python", category: "programmingLanguages", priority: 4 },
];

let input = { id: "c++", label: "C++", category: "programmingLanguages", priority: 4 };

let rez = base.filter (el => el.id === input.id)
if (rez.length > 0) {
    let bd = base.filter(el => el.id != input.id);
    bd.push(input);
    base = bd;
}
else console.log(`Error`);

console.log(base);