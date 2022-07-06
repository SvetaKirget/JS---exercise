class MathCalculator {
  constructor(array) {
    this.array = array;
  }

  validator = () => {
    if (!Array.isArray(this.array)) throw new Error(`Это не массив`);
    if (this.array.length === 0) throw new Error(`Пустой массив`);
    let str = 0;
    for (let key of this.array) if (isNaN(key)) str += 1;
    if (str > 0) throw new Error(`Это не число`);
    return true;
  };

  positiveNumber = () => {
    try {
      if (this.validator()) return this.array.filter((el) => el > 0);
    } catch (er) {
      return er.message;
    }
  };
}

const mathCalculator = new MathCalculator([1, 3, 8, -2, 0, 66]);

console.log(mathCalculator.positiveNumber());
