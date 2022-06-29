const base = [
  { id: "javascript", label: "Javascript", category: "programmingLanguages", priority: 1},
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  { id: "python", label: "C++", category: "programmingLanguages", priority: 4 },
];

const input = { id: "javascript", label: "C++", category: "programmingLanguages", priority: 4};

const checkObject = (array, object) => {
  try {
    let poisk = array.filter((el) => el.id !== object.id);
    if (array.length !== poisk.length) {
      array = poisk;
      return array;
    } else throw new Error(`Error`);
  
  } catch (er) {
    return er;
  }
};

console.log(checkObject(base, input));
