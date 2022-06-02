let user = {
    name: `Sveta`,
    age: 29,
    1: 10,
};
for (let key in user) {
    if (!isNaN(key)) {
        console.log(key);
    }
}