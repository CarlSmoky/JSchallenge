// Write a function that takes an object (a) as argument
// Return an array with all object keys

const myFunction = (a) => {
  return Object.keys(a);
};

console.log(myFunction({a:1,b:2,c:3})); //['a','b','c']