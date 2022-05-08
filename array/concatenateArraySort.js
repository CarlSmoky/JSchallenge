// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const myFunction = (a, b) => {
  // return a.concat(b);
  // return [].concat(a, b);
  let concatArr = [...a, ...b];
  let newArr = [];
  concatArr.filter(el => {
    if (!newArr.includes(el)) {
      newArr.push(el);
    };
  })
  return newArr.sort((a, b) => a -b);
};

// Refactor
// Set objects that store unique values of any type, whether primitive values or object references.
// const myFunction = (a, b) => {
//   return [...new Set([...a, ...b])].sort((x, y) => x - y);
// };

console.log(myFunction([1, 2, 3], [3, 4, 5]));
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));