// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const myFunction = (a) => {
  return Math.round(a * 100) / 100;
}

console.log(myFunction(2.12397)); //2.12