// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// const myFunction = (a, b) => {
//   const mySet = new Set();
//   const concatArrays = [...a, ...b];
//   concatArrays.forEach((item) => {
//     mySet.add(item);
//   })
//   let arr = [];
//   for (let item of mySet.values()) arr.push(item);
//   arr = arr.sort((a, b) => {
//     return a - b;
//   })
//   return arr;
// }

//Refactor
const myFunction = (a, b) => {
  return [...new. Set([...a, ...b])].sort((x, y) => x - y);
}

console.log(myFunction([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //[ -11, -10, 5, 22, 41,  42, 333]