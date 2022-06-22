// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const myFunction = (a, b) => {
  return a.reduce((acc, cur) => {
    if (cur > b) return acc + cur;
    return acc;
  }, 0)
};



console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); //Expected25
console.log(myFunction([-10, -11, -3, 1, -4], -3));