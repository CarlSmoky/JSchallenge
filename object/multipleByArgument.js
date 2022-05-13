// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

// const myFunction = (a, b) => {
//   const newObj = {...a};
//   Object.keys(newObj).forEach(el => {
//     newObj[el] = newObj[el] * b;
//   });
//   return newObj;
// };

// Refactor

const myFunction = (a, b) => {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}
console.log(myFunction({ a: 1, b: 2, c: 3 }, 3)); //{a:3,b:6,c:9}