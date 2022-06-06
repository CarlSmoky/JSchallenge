// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise

const myFunction = (a, b) => {
  return a.getTime() < b.getTime();
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //true
console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))) //false);