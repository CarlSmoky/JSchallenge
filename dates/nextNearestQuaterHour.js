// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

// const myFunction = (date) => {
//   const mins = date.getMinutes();
//   const m = (Math.ceil(mins/15) * 15) % 60;
//   return m;

//   /*
//   minutes is a score out of 60
//   e.g., 36 minutes is 36/60
//   convert the minutes to a score out of 4 by diving by 15
//   --> e.g., 36/60 is 2.4/4
//   then use Math.ceil to round up
//   --> becomes 3/4
//   then multiple back by 15 again to get a score out of 60 again
//   --> becomes 45/60

//   the % 60 is because if your score becomes 4/4, we want this to be 0, not 60

//   */
// };

//Refactor
const myFunction = () => {
  const quarter = 15 * 60 * 1000;
  const closestQuarter = new Date(Math.round(date / quarter) * quarter);
  const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
  return nextQuarter.getMinutes();
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00))); //15
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00))); //45
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00))); //30