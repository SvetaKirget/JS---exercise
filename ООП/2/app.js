class WordString {
  constructor(word) {
    this.word = word;
  }
  reverseString = () => {
    const mainword = this.word;
    return mainword.split(``).reverse().join(``);
  };
  upperFirst = () => {
    const mainword = this.word.split(``);
    return mainword[0].toUpperCase() + mainword.join(``).slice(1);
  };
  upperEvery = () => {
    const mainword = this.word.split(``);
    let outWord = [];
    for (let i = 0; i < mainword.length; i++) {
      outWord.push(mainword[1][0].toUpperCase() + mainword[1].slice(1));
    }
    return outWord.join(` `);
  };
}

const data = `Hello my name is jojo`;
const wordString = new WordString(data)
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());