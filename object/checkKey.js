// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const myFunction = (a, b) => {
  for(let i in a) {
    if (i === b) return true;
  }
  return false;
};

console.log(myFunction({a:1,b:2,c:3},'b')); //true
console.log(myFunction({x:'a',y:'b',z:'c'},'a')); //false