// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// const myFunction = arr => {
//   let sum = 0;
//   arr.forEach(element => {
//     sum += element;
//   });
//   return sum / arr.length;
// };

//Refactor

const myFunction = arr => {
  return arr.reduce((accumulator, current) => accumulator + current, 0) / arr.length;
};

console.log(myFunction([10, 100, 40])); //50
console.log(myFunction([10, 100, 1000])); //370