// let realSync = require('readLine-sync');
// let age = Number(realSync.question('How old are you?'));
// console.log(`You are ${age} years old`)
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 10 years, you will be ${age + 20} years old.`);
// console.log(`In 10 years, you will be ${age + 30} years old.`);
// console.log(`In 10 years, you will be ${age + 40} years old.`);


let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you ?'));
console.log(`You are ${age} years old`);

for (let future = 10; future <= 40; future += 10) {                   /* NOTICE HOW THE FOR LOOP IS INVOKED ON THE SECTION WHERE WE NEED IT TO KEEP LOGGING(TO THE CONSOLE) THE SAME THING*/
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}

/* FUTURE STARTS AT 10 AND               INCREMENETS BY 10 */