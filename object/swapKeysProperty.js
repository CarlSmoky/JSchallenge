// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// const myFunction = obj => {
//   const newObj = {};
//   Object.values(obj).forEach((key, i) => {
//     newObj[key] = Object.keys(obj)[i];
//   });
//   return newObj;
// };

// Refactor
const myFunction = obj => {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return { ...acc, [val]: key };
  }, {});
};



console.log(myFunction({ z: 'a', y: 'b', x: 'c', w: 'd' })); //{a:'z',b:'y',c:'x',d:'w'}
console.log(myFunction({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); //{a:'2',b:'4',c:'6',d:'8'}