// Write a function that takes an array of numbers as argument
// It should return the average of the numbers


const myFunction = arr => {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

console.log(myFunction([10, 100, 40])); //50
console.log(myFunction([10, 100, 1000])); //370