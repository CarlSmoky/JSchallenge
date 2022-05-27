// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const myFunction = (a, b) => {
  return b / 100 * a;
};

console.log(myFunction(100,50)); //50
console.log(myFunction(10,1)); //0.1
console.log(myFunction(500,25)); //125