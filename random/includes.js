// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const myFunction = (a, b) => {
  const arrStr = [...a];
  return a.includes(b) ? [b, ...a].join('') : [...a, b].join('');
   
} 

console.log(myFunction('cheese', 'cake')); //'cheesecake'
console.log(myFunction('lips', 's')); //'slips'