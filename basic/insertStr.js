// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const myFunction = (a, b) => {
  const strArr = a.split('');
  let newStrArr = [];
  let count = 0;
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && i !== strArr.length - 1) {
      newStrArr.unshift(b);
      newStrArr.unshift(a[i]);
    } else {
      newStrArr.unshift(a[i]);
    }
    count ++;
  }
  return newStrArr.join('');
};

console.log(myFunction('1234567','.')); //'1.234.567'
console.log(myFunction('abcde','$')); //'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz','w')); //'zwxyzwxyzwxyzwxyzwxyz'