// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object


// const myFunction = (a, b) => {
//   Object.entries(a).forEach(([key, value]) => {
//     a[key] = a[key] * b;
//   })
//   return a;
// }

//Refactor
const myFunction = (a, b) => {
 return Object.keys(a).reduce((acc, cur) => {
  return {...acc,  [cur] : a[cur] * b}
 }, {})
}
console.log(myFunction({ a: 1, b: 2, c: 3 }, 3)); //{a:3,b:6,c:9}