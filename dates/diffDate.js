// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const myFunction = (a, b) => {
  const diffTime = Math.abs(a - b);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}


console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
); //10