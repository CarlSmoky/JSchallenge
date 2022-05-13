// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// const myFunction = (a) => {
//   const newObj = new Object;
//   a.forEach(el => {
//     if (!newObj[el]) {
//       newObj[el] = 1;
//     } else {
//       newObj[el] += 1;
//     }
//   })
//   return newObj;
// };

//Refactor

const myFunction = a => {
  return a.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
}

console.log(myFunction([1,2,2,3])); //{1:1,2:2,3:1}
console.log(myFunction([9,9,9,99])); //{9:3,99:1}