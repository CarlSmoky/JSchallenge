// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// const myFunction = (arr) => {
//   return arr.reduce((acc, cur) => {
//     return cur < 0 ? acc + 1 : acc + 0;
//   }, 0)
// }

const myFunction = (arr) => {
  return arr.filter(el => el < 0).length;
}
console.log(myFunction([1,-2,2,-4])); //2
console.log(myFunction([0,9,1])); //0