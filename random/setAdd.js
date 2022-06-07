// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

const myFunction = (set, arr) => {
  arr.forEach(el => {
      set.add(el);
    });
    return set;
};

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6])); //new Set([1, 2, 3, 4, 5, 6 ]) = Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(myFunction(new Set('12345'), [...'6789'])); //new Set([...'123456789']) = Set(9) {'1', '2', '3', '4', '5', '6', '7', '8', '9'}
//[...'12345'] Speread array operator makes string array
// (5) ['1', '2', '3', '4', '5']

console.log(myFunction(new Set([1, 2, 3]), [2, 3])); //new Set([1, 2, 3]) = Set(3) { 1, 2, 3 }