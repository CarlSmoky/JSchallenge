// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const myFunction = (a, b) => {
  const newObj = {};
  a.forEach((e, i) => {
    newObj[e] = b[i]
  });
  return newObj;
};

console.log(myFunction(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}