// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// const myFunction = (a, b) => {
//   let newSet = new Set(a);
//   b.forEach(el => newSet.add(el));
//   const newArr = [...newSet];
//   return newArr.sort((a, b) => a - b);
// }

//Refactor
const myFunction = (a, b) => {
  return [...new Set([...a, ...b])].sort((p, c) => p - c);
}

console.log(myFunction([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //[ -11, -10, 5, 22, 41,  42, 333]