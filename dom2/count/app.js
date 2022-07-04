// On each button click, increase the value of the button by 1.
// Confirm your code by clicking the button!

const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  let currentCount = parseInt(btn.innerHTML);
  btn.innerHTML = currentCount + 1;
})
