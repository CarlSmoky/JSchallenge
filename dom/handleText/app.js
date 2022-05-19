// The Javascript function handleText fills the input field with the words Hello World. But, there is no code to execute this function.
// Complete the existing code below such that the function is called when the button is clicked. Verify by clicking the button.

const inputField = document.getElementById("input");
const btn = document.getElementById("button");

const handleClick = () => {
  inputField.value = "Hello, World";
}

btn.addEventListener("click", handleClick);