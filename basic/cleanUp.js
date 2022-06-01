// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

// const myFunction = (a, b) => {
//   const isLetter = (str) => {
//     return str.match(/[a-z]/i) ? true : false;
//   }
//   let newString = '';
//   a.split('').forEach((str, i) => {
//     if (i === 0) {
//       str = str.toUpperCase();
//     }
//     newString += isLetter(str) ? str : '';
//   })
//   for (let i = b.length - 1; i >= 0; i--) {
//     newString += isLetter(b[i]) ? b[i] : '';
//   }
//   return newString;
// }

//Refactor
const myFunction = (a, b) => {
  const func = x => x.replace('%','');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

console.log(myFunction('java', 'tpi%rcs')); //'Javascript'
console.log(myFunction('c%ountry', 'edis')); //'Countryside'
console.log(myFunction('down', 'nw%ot')); //'Downtown'