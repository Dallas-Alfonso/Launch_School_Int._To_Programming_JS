// let rlSync = require('readline-Sync');
// let name = rlSync.question('What is your name?');
// console.log(`Hello ${name}!`);

let realSync = require('readline-Sync');
let firstName = realSync.question('What is your first name?');
let lastName = realSync.question('What is your last name?');
console.log(`Hello ${firstName} ${lastName}!`);