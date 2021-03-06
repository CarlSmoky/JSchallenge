// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const myFunction = (a, n) => {
  let newArr = [];
   a.forEach((el, i) => {
    if ((i + 1) % n === 0 ) {
      newArr = [...newArr, el];
    }
  })
  return newArr;
}

// const myFunction = (a, n) => {
//   return a.filter((el, i) => {
//     return (i + 1) % n === 0;
//   })
// }

console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3)); //[3,6,9]
console.log(myFunction([10,9,8,7,6,5,4,3,2,1],5)); //[6,1]