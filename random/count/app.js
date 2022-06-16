// On each button click, increase the value of the button by 1.
// Confirm your code by clicking the button!

const pulusButton = document.querySelector("#pulus_button");
const minuaButton = document.querySelector("#minus_button");
const count = document.querySelector("#count");
pulusButton.addEventListener("click", () => {
  count.innerHTML = Number(count.innerHTML) + 1;
})
minuaButton.addEventListener("click", () => {
  count.innerHTML = Number(count.innerHTML) - 1;
})
