// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// const myFunction = (a, b) => {
//   const arrStr =  [...a].reverse();
//   let result = [];
//   for (let i = 1; i < arrStr.length + 1; i++) {
//     result.push(arrStr[i - 1])
//     if (i % 3 === 0) {
//       result.push(b);
//     }
//   }
//   return result.reverse().join('');
// }

//Refactor
const myFunction = (a, b) => {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    console.log("before slice",rest);
    rest = rest.slice(0, -3); //slice is not mutating.
    console.log("after slice",rest);
  }
  return result.reverse().join(b);
}

console.log(myFunction('1234567', '.')); //'1.234.567'
// console.log(myFunction('abcde', '$')); //'ab$cde
// console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'