// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const myFunction = arr => {
  let newObj = {};
  arr.forEach(el => {
    const objName = el[0].toLowerCase();
    if (newObj[objName]) {
      newObj[objName].push(el);
    } else {
      newObj[objName] = [el];
    }
  });
  return newObj;
};

console.log(myFunction(['Alf', 'Alice', 'Ben'])); //{ a: ['Alf', 'Alice'], b: ['Ben']}
console.log(myFunction(['Ant', 'Bear', 'Bird']));
console.log(myFunction(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}