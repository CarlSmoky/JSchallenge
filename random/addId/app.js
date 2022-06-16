// Change id of HTML element
// In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.
// Verify that your code works by clicking the button.

const input = document.querySelector("#wrapper input")
const button = document.querySelector("button");

const changeInput = () => {
  input.value = "Hey!";
  input.setAttribute("id", "inputEl")
}
button.addEventListener("click", changeInput);

