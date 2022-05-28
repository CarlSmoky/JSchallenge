// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

const myFunction = (a, b, c, d, e, f) => {
  // const sum = a + b;
  // const subtract = sum - c;
  // const multiply = subtract * d;
  // const divide = multiply / e;
  // const exponentPower = Math.pow(divide, f); 
  // return exponentPower;
  //Refactor
  return ((a + b - c ) * d ) / e ** f;
};

console.log(myFunction(6,5,4,3,2,1)); //10.5