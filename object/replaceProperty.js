// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// const myFunction = obj => {
//   Object.entries(obj).forEach((arr) => {
//     if (!arr[1].trim()) {
//       obj[arr[0]] = null;
//     }
//   });
//   return obj;
// };

// Refactor
const myFunction = obj => {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}

console.log(myFunction({ a: 'a', b: 'b', c: '' })); //{ a: 'a', b: 'b', c: null }
console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' })); //{ a: null, b: 'b', c: null, d: 'd' }