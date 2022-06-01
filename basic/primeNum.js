// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const myFunction = (a) => {
  const halfNum = Math.floor(a / 2) ;
  const isPrime = (a) => {
    let mod = 0;
    for (let i = 2; i < halfNum; i++) {
      if (a % i === 0) {
        mod += 1;
      }
    }
    return mod === 0;
  }

  const getPrime = (a) => {
    let nextHighestPrime = a;
    while (!isPrime(nextHighestPrime)) {
      nextHighestPrime ++;
    }
    return nextHighestPrime;
  }

  if (isPrime(a)) {
    return a;
  } else {
    return getPrime(a);
  }
}

console.log(myFunction(38)); //41
console.log(myFunction(7)); //7
console.log(myFunction(115)); //127