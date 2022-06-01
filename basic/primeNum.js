// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// const myFunction = (a) => {
//   const halfNum = Math.floor(a / 2) ;
//   //helper
//   const isPrime = (a) => {
//     let mod = 0;
//     for (let i = 2; i < halfNum; i++) {
//       if (a % i === 0) {
//         mod += 1;
//       }
//     }
//     return mod === 0;
//   }
//   //helper
//   const getPrime = (a) => {
//     let nextHighestPrime = a;
//     while (!isPrime(nextHighestPrime)) {
//       nextHighestPrime ++;
//     }
//     return nextHighestPrime;
//   }

//   return isPrime(a) ? a : getPrime(a);
// }

// Refactor
const myFunction = (a) => {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = a;
  while (!isPrime(n)) n++;
  return n;
};

console.log(myFunction(38)); //41
console.log(myFunction(7)); //7
console.log(myFunction(115)); //127