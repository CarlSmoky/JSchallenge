// On each button click, increase the value of the button by 1.
// Confirm your code by clicking the button!

const button = document.getElementById("button");
console.log(button);

button.addEventListener('click', (e) => {
  const currentNum = Number(e.target.innerText);
  return e.target.innerText = currentNum + 1;
})

