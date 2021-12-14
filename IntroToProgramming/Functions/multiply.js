// let realSync = require('readline-Sync');
// let firstName = realSync.question('What is your first name?');
// let lastName = realSync.question('What is your last name?');
// console.log(`Hello ${firstName} ${lastName}!`);

// Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// Copy Code
// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566



function getNumber (message) {
  let rlSync = require('readline-Sync');
  let name = Number(rlSync.question(message));
  return name;
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${left * right}`); 
  // Get left value   Get right value    For the answer, we get result by calling the multiply function.  which gives us its result

  // TIP  USE CALL STACK TO BUILD UP YOUR SOLUTIONS... Last in, first out.  Bottom up technique