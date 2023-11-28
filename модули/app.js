const http = require("http");
const greeting = require("./greeting.js");
const os = require("os");
const User = require("./user.js");

let eugene = new User("Eugene", 32);
let rodion = new User("Rodion", 18);
// получим имя текущего пользователя
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(rodion.name));



rodion.displayInfo();