// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// const myFunction = (arr) => {
//   let result = true;
//   let i = 0;
//   while (i < arr.length - 1 ) {
//     result = arr[i] === arr[i + 1] ? true : false;
//     if (!result) return false;
//     i++;
//   }
//   return result;
// }

//Refactor
const myFunction = (arr) => {
  return arr.reduce((a, b) => a === b ? a : b) === arr[0];
}

console.log(myFunction([true, true, true, true])); //true
console.log(myFunction(['10',10,10,10])); //false