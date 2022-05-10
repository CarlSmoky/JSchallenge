// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const myFunction = (a, n) => {
let result = [];
for (let i = 0; i < a.length; i++) {
  (i + 1) % n === 0 ? result.push(a[i]) : '';
}
return result;
};

console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3)); //[3,6,9]
console.log(myFunction([10,9,8,7,6,5,4,3,2,1],5)); //[6,1]