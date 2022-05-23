// On each button click, increase the value of the button by 1.
// Confirm your code by clicking the button!

const button = document.getElementById("button");
// console.log(button);

// button.addEventListener('click', (e) => {
//   const currentNum = Number(e.target.innerText);
//   return e.target.innerText = currentNum + 1;
// })

//Refactor1 Not using event.target
// button.addEventListener('click', () => {
//   const currentNum = Number(button.innerText);
//   return button.innerText = currentNum + 1;
// })

//Refactor2 ParseInt
button.addEventListener('click', () => {
  const oldValue = parseInt(button.innerText, 10);
  button.innerText = oldValue + 1;
});

