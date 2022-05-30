// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const myFunction = (str) => {
  const strArr = str.split('');
  const charCodes = strArr.map((el) => el.charCodeAt(0));
  let newStrArr = [];
  charCodes.forEach((code) => {
    newStrArr.push(String.fromCharCode(code + 1));
  })
  return newStrArr.join('');
}

console.log(myFunction('bnchmf')); //'coding'
console.log(myFunction('bgddrd')); //'cheese'