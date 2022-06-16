// Write a function that takes an object (a) as argument
// Return the sum of all object values

const myFunction = a => {
  Object.values(a).reduce((p, c) => p + c, 0);
};

console.log(myFunction({a:1,b:2,c:3})); //6