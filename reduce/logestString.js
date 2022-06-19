// Write a function that takes an array of strings as argument
// Return the longest string


const myFunction = arr => {
  return arr.reduce((acc, cur) =>{
    return acc.length < cur.length ? cur : acc;
  },'');
};

console.log(myFunction(['help', 'me'])); //'help'
console.log(myFunction(['I', 'need', 'candy'])); //'candy'