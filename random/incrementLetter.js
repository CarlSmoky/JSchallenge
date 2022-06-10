// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// const myFunction = (str) => {
//   let newStr = '';
//   for (let i in str ) {
//     newStr += String.fromCharCode(str.charCodeAt(i) + 1);
//   }
//   return newStr;
// }

//Refactor
const myFunction = (str) => {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
}

console.log(myFunction('bnchmf')); //'coding'
console.log(myFunction('bgddrd')); //'cheese'
console.log(myFunction('sdrshmf')); //'testing'