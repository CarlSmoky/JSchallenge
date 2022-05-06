// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// const myFunction = arr => {
//   const str = arr.reduce((a, b) => a === b ? a : b);
//   if (str === arr[0]) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Refactor1
const myFunction = arr => {
  return arr.reduce((a, b) => a === b ? a : b) === arr[0];
};

//// Refactor2
// const myFunction = arr => {
//   return new Set(arr).size === 1;
// };


console.log(myFunction([true, true, true, true]));
console.log(myFunction(['test', 'test', 'test']));
console.log(myFunction(['10',10,10,10]));