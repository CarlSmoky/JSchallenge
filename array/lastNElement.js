// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const myFunction = (a, n) => {
  return a.slice(-n);
};

console.log(myFunction([1, 2, 3, 4, 5], 2));