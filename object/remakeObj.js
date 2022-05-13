// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const myFunction = obj => {
  const listItem = {
    fn : '',
    ln : '',
    size : 'cm',
    weight : 'kg'
  };

  const newObj = {};
  Object.entries(obj).map(([k, v]) => {
    Object.keys(listItem).forEach(el => {
      if (k === el) {
        if (el === 'size') {
          const valueWithUnit = v + listItem.size; 
          newObj[k] = valueWithUnit;
 
        } else if (el === 'weight') {
          const valueWithUnit = v + listItem.weight; 
          newObj[k] = valueWithUnit;
        } else(
          newObj[k] = v
        )
      }
    })
  });
  return newObj; 
}

console.log(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
);
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));
// {fn: 'Matthew', ln: 'Müller'}