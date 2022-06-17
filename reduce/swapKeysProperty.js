// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object


// const myFunction = obj => {
//   const newObj = new Object;
//   Object.entries(obj).forEach(([key, value]) => {
//     newObj[value] = key;
//   })
//   return newObj;
// };

//Refactor
const myFunction = obj => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    // return {...acc, [value] : key};
    let newAcc = acc;
    newAcc[value] = key;
    return newAcc;
  }, {})
}

const myObj = {a: 1, b: 2 };
const copy = {...myObj};

console.log(myFunction({ z: 'a', y: 'b', x: 'c', w: 'd' })); //{a:'z',b:'y',c:'x',d:'w'}
console.log(myFunction({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); //{a:'2',b:'4',c:'6',d:'8'}


let original1 = {a: 1, b: 2 };
let shallowCopy = original1;
shallowCopy["a"] = 5;
// shallowCopy: {a: 5, b: 2 }
console.log(original1["a"]);
// original1: {a: ???, b: 2 }


let original2 = {a: 1, b: 2 , c : { e: 1, f :2} };
let deepCopy = {...original2, c:3};
deepCopy["a"] = 5;
console.log(original2["a"]);
// original2: {a: ???, b: 2 }

//Deep copy
let str = JSON.stringify(original2);
console.log(original2);
console.log(str);
let parsedObj = JSON.parse(str);
console.log(parsedObj);

console.log(parsedObj === original2);
