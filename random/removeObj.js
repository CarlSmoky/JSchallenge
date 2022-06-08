// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// const myFunction = obj => {
//   const newObj = new Object;
//   Object.entries(obj)
//     .forEach(([key, value]) => {
//       if (key !== 'b') {
//         newObj[key] = value;
//       }
//     })

//   return newObj;
// }

//Refactor1
const myFunction = obj => {
  const newObj = new Object;
  const arr = Object.entries(obj)
    .filter(([key, value]) => key !== 'b')
  arr.forEach(el => {
    newObj[el[0]] = el[1];
  })
  return newObj;
}



console.log(myFunction({ a: 1, b: 7, c: 3 })); //{ a: 1, c: 3 }
console.log(myFunction({ b: 0, a: 7, d: 8 })); //{ a: 7, d: 8 }
console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 })); //{ e: 6, f: 4, a: 3 }