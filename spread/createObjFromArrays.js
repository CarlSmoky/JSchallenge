// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object


const myFunction = (a, b) => {
  return a.reduce((acc, cur, i) => {
    return {...acc, [cur] : b[i]}
  }, {})
};

console.log(myFunction(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}