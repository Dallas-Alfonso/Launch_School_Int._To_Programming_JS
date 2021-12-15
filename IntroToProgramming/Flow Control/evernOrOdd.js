// function evenOrOdd (number) {
// if (number % 2 === 0) {
//   console.log('even')
// } else {
//   console.log('odd');
// }
// }

function evenOrOdd (number) {
  if(!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;  /* returning so we can proceed and use with the rest of the function?  */
  }
if (number % 2 === 0) {
  console.log('even')
} else {
  console.log('odd');
}
}
