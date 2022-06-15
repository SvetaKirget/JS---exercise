const base = [
  {
    id: "javascript",
    label: "Javascript",
    category: "programmingLanguages",
    priority: 4,
  },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 4 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 4 },
  {
    id: "python",
    label: "python",
    category: "programmingLanguages",
    priority: 4,
  },
];

const findID = (array) => {
  try {
    const input = {
      label: "C++",
      category: "programmingLanguages",
      priority: 4,
    };
    let value = array.filter((el) => el.label === input.label);
    if (value.length <= 0) throw new Error(`Error`);
    else {
      array.push({ id: input.label.toLowerCase(), ...input });
    }
  } catch (er) {
    return er;
  }
};

console.log(findID(base));
