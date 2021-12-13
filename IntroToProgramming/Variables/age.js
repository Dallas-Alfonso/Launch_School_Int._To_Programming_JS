// Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

// Copy Code

// You are 20 years old.
// In 10 years, you will be 30 years old.
// In 20 years, you will be 40 years old.
// In 30 years, you will be 50 years old.
// In 40 years, you will be 60 years old.

// let age = 0;

// console.log(`you are ${age} years old.`);
// console.log(`In 10 years, you will be ${age+10} years old. `);
// console.log(`In 20 years, you will be ${age+20} years old. `);
// console.log(`In 30 years, you will be ${age+30} years old. `);
// console.log(`In 40 years, you will be ${age+40} years old. `);



// Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

let realSync = require('readLine-sync');
let age = Number(realSync.question('How old are you?'));
console.log(`You are ${age} years old`)
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 10 years, you will be ${age + 20} years old.`);
console.log(`In 10 years, you will be ${age + 30} years old.`);
console.log(`In 10 years, you will be ${age + 40} years old.`);
