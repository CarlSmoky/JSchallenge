// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const myFunction = (a) => {
  return a.slice(0, a.length - 3);
  return a.slice(0, - 3);
};

console.log(myFunction('abcdefg')); //'abcd'