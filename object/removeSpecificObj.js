// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// const myFunction = obj => {
//   let result = {};
//   for (let el in obj) {
//     if (el !== 'b') {
//       result[el] =obj[el] ;
//     }
//   }
//   return result;
// };

//Refactor
const myFunction = obj => {
  const { b, ...rest } = obj;
  return rest;
}

console.log(myFunction({ a: 1, b: 7, c: 3 })); //{ a: 1, c: 3 }