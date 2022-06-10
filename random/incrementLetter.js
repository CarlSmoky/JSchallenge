// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const myFunction = (str) => {
  let newStr = '';
  for (let i in str ) {
    newStr += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return newStr;
  
}

console.log(myFunction('bnchmf')); //'coding'
console.log(myFunction('bgddrd')); //'cheese'
console.log(myFunction('sdrshmf')); //'testing'