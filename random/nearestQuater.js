// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

const myFunction = (date) => {
  const mins = date.getMinutes();
  return (Math.ceil(mins / 15) * 15) % 60;
}

console.log(myFunction(new Date(2022, 5, 15, 10, 9, 00))); //15

console.log(myFunction(new Date('June 15, 2022 10:09:00 UTC'))); 

console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));

// let date = new Date('June 15, 2022 14:30:00 ');
// console.log(date.toString());

// let date = new Date('June 15, 2022 14:30:00 UTC');
// console.log(date.toString());

// var date = new Date('6/29/2011 4:52:48 PM GMT');
// console.log(date.toString());// "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"

// date.getFullYear();
// date.getMonth();
// date.getDate();
// date.getHours();
// date.getMinutes();
// date.getSeconds();
// date.getTime();
// date.getDay();
