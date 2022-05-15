// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

const myFunction = (a, b) => {
  return a.getTime() + b * 1000 * 60 * 60 * 24;
};

console.log(myFunction(new Date(Date.UTC(2000,01,01)), 31)); //952041600000
console.log(myFunction(new Date(Date.UTC(2000,01,01)), 10)); //950227200000