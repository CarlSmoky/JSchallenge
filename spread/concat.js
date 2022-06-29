// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// const myFunction = (a, b) => {
//   let newArr = [...a];
//   b.forEach(el => {
//     if (!a.includes(el)) {
//       newArr = [...newArr, el];
//     }
//   })
//   return newArr.sort((a, b) => a - b);
// };

//Refactor
const myFunction = (a, b) => {
  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}


console.log(myFunction([1, 2, 3], [3, 4, 5]));
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));