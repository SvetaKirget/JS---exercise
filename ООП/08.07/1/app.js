class Worker {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName = () => `${this.name} ${this.surname}`;
}

class Singer extends Worker {
  constructor(name, surname, years, birth, style) {
    super(name, surname);
    this.years = years;
    this.birth = birth;
    this.style = style;
  }
  getMoreInfo = () => `${this.years}, ${this.birth}, ${this.style}`;
}

const singer = new Singer("Valery", "Meladze", 58, "12.12.1964", "the Best");
console.log(singer.getFullName());
console.log(singer.getMoreInfo());
