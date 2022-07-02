// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in


// const myFunction = obj => {
//   const newObj = new Object;
//   for (let key in obj) {
//     if (key === "fn") {
//        newObj[key] = obj[key]
//     }

//     if (key === "ln") {
//       newObj[key] = obj[key]
//     }

//     if (key === "size") {
//       newObj[key] = obj[key] + "cm"
//     }

//     if (key === "weight") {
//       newObj[key] = obj[key] + "kg"
//     }
//   }
//   return newObj;
// }

//Refactor
const myFunction = obj => {
  return {
    ...(obj.fn && {fn : obj.fn}),
    ...(obj.ln && {fn : obj.ln}),
    ...(obj.size && {size : obj.size + "cm"}),
    ...(obj.weight && {weight : obj.weight + "kg"}),
  }
}

console.log(myFunction({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 }));
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(myFunction({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 })
);
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(myFunction({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }));
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(myFunction({ ln: 'Müller', age: 19, email: 'matthew@mueller.de' }));
// {fn: 'Matthew', ln: 'Müller'}