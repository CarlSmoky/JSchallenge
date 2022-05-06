// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
const myFunction = a => {
  return a.splice(3);
};

console.log(myFunction([1,2,3,4]));
