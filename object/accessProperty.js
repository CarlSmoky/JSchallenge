// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const myFunction = obj => {
  return obj.country;
};

console.log(myFunction({  continent: 'Asia',  country: 'Japan'})); //Japan