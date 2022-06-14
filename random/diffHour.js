// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

const myFunction = (a, b) => {
  const diff = Math.abs(a.getTime() - b.getTime());
  const diffHour = diff / (1000 * 60 * 60);
  return diffHour <= 1 ? true : false;
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) ); //true
console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))); //true
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))); //false