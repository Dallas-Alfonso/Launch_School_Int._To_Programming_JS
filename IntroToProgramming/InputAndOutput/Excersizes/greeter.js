// let rlSync = require('readline-Sync');
// let name = rlSync.question('What is your name?');
// console.log(`Hello ${name}!`);

// let realSync = require('readline-Sync');
// let firstName = realSync.question('What is your first name?');
// let lastName = realSync.question('What is your last name?');
// console.log(`Hello ${firstName} ${lastName}!`);





// ORIGINAL ANSWER

// let realSync = require('readline-Sync');
// let firstName = realSync.question('What is your first name?');
// let lastName = realSync.question('What is your last name?');
// console.log(`Hello ${firstName} ${lastName}!`);





// In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.

// function getName(prompt) {
//   let readlineSync = require('readline-sync');
//   let name = readlineSync.question(prompt);
//   return name;
// }

// let firstName = getName('What is your first name? ');
// let lastName = getName('What is your last name? ');
// console.log(`Hello, ${firstName} ${lastName}!`);


// let realSync = require('readline-Sync');
// let firstName = realSync.question('What is your first name?');
// let lastName = realSync.question('What is your last name?');
// console.log(`Hello ${firstName} ${lastName}!`);


function fullName (prompt) {
  let rlSync = require('readline-Sync');
  let firstPartQ = rlSync.question(prompt);
  return firstPartQ;
}

let firstName = fullName('What is your first name?');
let lastName = fullName('what is you last name?');
console.log(`Hello ${firstName} ${lastName}`);