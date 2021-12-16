let  names = ['Chris', 'Kevin', 'Pete', 'Victor'];
let upperNames = [];
// let index = 0;

// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }

// console.log(upperNames);


for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {    /* HERE WE SEE THAT IF STATEMENTS DONT ALWAYS NEED AN ELSE.. */
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);