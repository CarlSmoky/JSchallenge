// Change id of HTML element
// In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.
// Verify that your code works by clicking the button.

const button = document.querySelector("#wrapper button");
console.log(button);

const changeInput = () => {
  const inputEl = document.querySelector("#inputEl");
  if (inputEl) {
    inputEl.value = "Hello world";
  }
}
button.addEventListener('click', changeInput);

document.querySelector('#wrapper input').setAttribute('id', 'inputEl');
// inputEldocument.querySelector('#wrapper input').id = 'inputEl';
