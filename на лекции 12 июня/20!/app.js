const base = [
  {
    id: "javascript",
    label: "Javascript",
    category: "programmingLanguages",
    priority: 1,
  },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  { id: "python", label: "C++", category: "programmingLanguages", priority: 4 },
];

const input = {
  id: "javascript",
  label: "C++",
  category: "programmingLanguages",
  priority: 4,
};

const checkObject = (array_1, array_2) => {
  try {
    let poisk = array_1.filter((el) => el.id !== array_2.id);
    if (array_1.length !== poisk.length) {
      poisk.push(array_2);
      array_1 = poisk;
    } else throw new Error(`Error`);
  } catch (er) {
    return er;
  }
};
