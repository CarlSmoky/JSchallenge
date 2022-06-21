// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}


// const myFunction = arr => {
//   const obj = new Object;
//   arr.forEach(element => {
//     if (obj[element[0].toLowerCase()]) {
//       const newArr = obj[element[0].toLowerCase()];
//       newArr.push(element);
//       obj[element[0].toLowerCase()] = newArr;
//     } else {
//       obj[element[0].toLowerCase()] = [element];
//     }
//   });
//   return obj;
// }

//Refactor
const myFunction = (arr) => {
  return arr.reduce((acc, cur) => {
    const key = cur[0].toLowerCase();
    return {...acc, [key]: [...(acc[key] || []), cur]};
  }, {})
};

console.log(myFunction(['Alf', 'Alice', 'Ben'])); //{ a: ['Alf', 'Alice'], b: ['Ben']}
console.log(myFunction(['Ant', 'Bear', 'Bird']));
console.log(myFunction(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}
