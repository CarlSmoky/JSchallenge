// Once you click the button, the checkbox should be checked.
// Confirm your code by clicking the button!

const btn = document.querySelector("#button");


btn.addEventListener("click", () => {
  const checkbox = document.querySelector("#checkbox");
  checkbox.checked = true;
})