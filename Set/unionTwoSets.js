// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

const myFunction = (a, b) => {
  for (let e of b.keys()) {
    a.add(e);
  }
  return Array.from(a);
}

console.log(myFunction(new Set('123'), new Set('234'))); //new Set('1234')
console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))); //new Set([1, 2, 3, 4, 5])

const arr = [1,2,3,4,5];

const s = new Set();

arr.forEach(e => s.add(e)); // === new Set([1,2,3,4,5])

