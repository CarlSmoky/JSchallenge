// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// const myFunction = (a, b) => {
//   return a.getTime() === b.getTime();
// };

const myFunction = (a, b) => {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate()=== b.getDate();
}


console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
); //true