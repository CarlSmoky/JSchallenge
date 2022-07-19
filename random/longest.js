// Write a function that takes an array of strings as argument
// Return the longest string

// const myFunction = (arr) => {
//   let longest = '';
//   arr.forEach(el => {
//     longest = el.length > longest.length ? el : longest;
//   })
//   return longest;
// }

//Refactor
const myFunction = arr => {
  return arr.reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  }, '')
}

console.log(myFunction(['help', 'me'])); //help
console.log(myFunction(['I', 'need', 'candy'])); //'candy'