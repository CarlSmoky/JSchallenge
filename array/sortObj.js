// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const myFunction = arr => {
  return arr.sort((a, b) => arr[1].b - arr[0].b);
}

//Refactor
// const myFunction = arr => {
//   const sort = (x, y) => x.b - y.b;
//    return arr.sort(sort);
// }

console.log(myFunction([{a:1,b:2},{a:5,b:4}]));
console.log(myFunction([{a:2,b:10},{a:5,b:4}]));
console.log(myFunction([{a:1,b:7},{a:2,b:1}]));