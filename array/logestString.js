// Write a function that takes an array of strings as argument
// Return the longest string

// const myFunction = arr => {
//   let longestStr = "";
//   arr.forEach(element => {
//     if (longestStr.length < element.length) {
//       longestStr = element;
//     }
//   });
//   return longestStr;
// };

//Refactor
const myFunction = arr => {
  return arr.reduce((a, b) => a.length <= b.length ? b : a);
};

console.log(myFunction(['help', 'me'])); //'help'
console.log(myFunction(['I', 'need', 'candy'])); //'candy'