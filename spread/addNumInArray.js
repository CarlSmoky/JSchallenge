// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// const myFunction = (arr, num) => {
//   let newArr = [];
//   if (num < 6) {
//     newArr = [0, ...arr];
//   } else {
//     newArr = [num, ...arr];
//   }
//   return newArr;
// }


//Refactor
const myFunction = (arr, num) => {
  return [...(num < 6 ? [0] : [num]), ...arr];
}
console.log(myFunction([1,2,3], 6)); //[6,1,2,3]
console.log(myFunction(['a','b'], 2)); //[0,'a','b']