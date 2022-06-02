// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const myFunction = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const plusOneChar = str.charCodeAt(i) + 1;
    result += String.fromCharCode(plusOneChar);
    }
  return result;
}



console.log(myFunction('bnchmf')); //'coding'
console.log(myFunction('bgddrd')); //'cheese'
console.log(myFunction('sdrshmf')); //'testing'