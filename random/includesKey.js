// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

const myFunction = (a, b) => {
  return a[b] > 0;
  // return Boolean(a[b]);
}

console.log(myFunction({a:1,b:2,c:3},'b')); //true
console.log(myFunction({x:'a',y:null,z:'c'},'y')); //false
console.log(myFunction({x:'a',b:'b',z:undefined},'z')); //false