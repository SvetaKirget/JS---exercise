class Singer {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;

    }
    getAutograph = () => {
        return `С наилучшими пожеланиями ${this.name} ${this.surname}`;
    }
}

const singer = new Singer (`Valery`, `Meladze`)

console.log(singer.getAutograph());