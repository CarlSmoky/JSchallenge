// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const myFunction = (a, b) => {
  const strArr = b.split('');
  let countLetter = 0;
  strArr.forEach(letter => {
    if (letter === a) countLetter += 1;
  })
  return countLetter;
};

console.log(myFunction('m', 'how many times does the character occur in this sentence?')); //2