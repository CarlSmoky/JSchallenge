// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

// const myFunction = (a) => {
//   const string = a.toString();
//   let arr = [];
//   for (let i = 0; i < string.length; i++) {
//     arr.push(Number(string[i]));
//   }
//   return arr;
// }

//Refactor
const myFunction = (a) => {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}

console.log(myFunction(10)); //[1, 0]