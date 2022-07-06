// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// const myFunction = (a, b) => {
//   let reversedArr = [...a].reverse();
//   let newArr = [];
//   for (let i = 1; i <= reversedArr.length; i++) {
//     newArr.push(reversedArr[i - 1]);
//     if (i % 3 === 0) {
//       newArr.push(b);
//     }
//   }
//   return newArr.reverse().join('');
// }

//Refactor
const myFunction = (a, b) => {
  let reversedArr = [...a].reverse();
  let newArr = [];
  for (let i = 1; i <= reversedArr.length; i++) {
    newArr = [...newArr, reversedArr[i - 1]];
    if (i % 3 === 0) {
      newArr = [...newArr, b];
    }
  }
  return newArr.reverse().join('');
}


console.log(myFunction('1234567', '.')); //'1.234.567'
console.log(myFunction('abcde', '$')); //'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'