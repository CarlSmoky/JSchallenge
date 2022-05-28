// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const myFunction = (a) => {
  return a % 1 === 0;
};

console.log(myFunction(4)); //true
console.log(myFunction(1.123)); //false