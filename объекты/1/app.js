let user = {};
user.name = `John`;
user.surname = `Smith`;
user.name = `Pete`;
delete user.name;
console.log(user);

// 1 что объект не пустой
let obj = {};
let n = Object.keys(obj);
if (n.lenght > 0) console.log(`Full`);
else console.log(`Not full`);
