// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const myFunction = (a, b) => {
  let sum = 0;
  a.filter(element => {
    sum += element > b ? element : 0;
  });
  return sum;
};

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); //Expected25
console.log(myFunction([-10, -11, -3, 1, -4], -3));