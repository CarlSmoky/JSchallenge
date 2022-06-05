// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the 

// const myFunction = (a) => {
//   let result = [];
//   for (let str of a.toString()) {
//     result.push(Number(str));
//   }
//   return result;
// }

//Refactor
const myFunction = (a) => {
  const string = a + '';
  // const strings = string.split('');
  return string.split('').map(digit => Number(digit))
}

console.log(myFunction(10)); //[1,0]