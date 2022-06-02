// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// const myFunction = (x, y) => {
//   const isDivisible = (num1, num2) => {
//     return num1 % num2 === 0;
//   }
//   const getDivisbleBy = (num1, num2) => {
//     let result = num1;
//     while(!isDivisible(result, num2)) result++;
//     return result;
//   }
//   return isDivisible(x, y) ? x : getDivisbleBy(x, y);
// }

//Refatcor
const myFunction = (x, y) => {
  while(x % y !== 0) x++;
  return x;
}

console.log(myFunction(1, 23)); //23
console.log(myFunction(23, 23)); //23
console.log(myFunction(7, 3)); //9
console.log(myFunction(-5, 7)); //0
console.log(myFunction(9, 5)); //10