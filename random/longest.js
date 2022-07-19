// Write a function that takes an array of strings as argument
// Return the longest string

const myFunction = (arr) => {
  let longest = '';
  arr.forEach(el => {
    longest = el.length > longest.length ? el : longest;
  })
  return longest;
}

console.log(myFunction(['help', 'me'])); //help
console.log(myFunction(['I', 'need', 'candy'])); //'candy'