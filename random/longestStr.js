// Write a function that takes an array of strings as argument
// Return the longest string

const myFunction = (arr) => {
  let longestStr = '';
  arr.forEach((str) => {
    if (longestStr.length < str.length) {
      longestStr = str;
    }
  })
  return longestStr;
}

console.log(myFunction(['help', 'me'])); //help
console.log(myFunction(['I', 'need', 'candy'])); //'candy'