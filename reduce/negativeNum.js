// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const myFunction = a => {
  return a.reduce((acc, cur) => {
    return cur < 0 ? acc + 1 : acc + 0;
  }, 0)
};

console.log(myFunction([1,-2,2,-4])); //2
console.log(myFunction([0,9,1])); //0