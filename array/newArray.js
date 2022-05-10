// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
// const myFunction =(arr, num) => {
//   const bundary = 6;
//   num >= bundary ? arr.unshift(num) : arr.unshift(0);
//   return arr;
// };

//Refactor
const myFunction = (arr, num) => {
  return [...(num > 5 ? [num] : [0]), ...arr];
}
console.log(myFunction([1,2,3], 6)); //[6,1,2,3]
console.log(myFunction(['a','b'], 2)); //[0,'a','b']