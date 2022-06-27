// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

const myFunction = (set, val) => {
  set.delete(val);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1)) //new Set([2, 3])