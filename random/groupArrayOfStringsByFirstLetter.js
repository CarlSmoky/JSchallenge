// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// const myFunction = (arr) => {
//   const newObj = new Object;
//   arr.forEach(el => {
//     const arrays = newObj[el[0].toLowerCase()] ? newObj[el[0].toLowerCase()] : [];
//     arrays.push(el);
//     newObj[el[0].toLowerCase()] = arrays;
//   })
//   return newObj;
// }

//Refactor
const myFunction = arr => {
  return arr.reduce((acc, cur) => {
    const key = cur[0].toLowerCase();
    return {...acc, [key] : [...(acc[key] || []), cur]}
  }, {})
}

console.log(myFunction(['Alf', 'Alice', 'Ben'])); //{ a: ['Alf', 'Alice'], b: ['Ben']}
console.log(myFunction(['Ant', 'Bear', 'Bird'])); //{ a: ['Ant'], b: ['Bear', 'Bird']}
console.log(myFunction(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}