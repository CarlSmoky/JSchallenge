// Write a function that takes an object (a) as argument
// Return the sum of all object values

const myFunction = a => {
  return Object.values(a).reduce((acc, cur) => acc + cur, 0);
};

console.log(myFunction({a:1,b:2,c:3})); //6