// Remove element from the DOM
// You may not see it in the example UI, but underneath the red circle is a green circle. Extend the function removeRedCircle to remove the circle with id red from the DOM.
// Make sure that you really remove the element instead of just hiding it. Confirm that your code works by clicking the button.

const button = document.querySelector('#button');

const removeRedCircle = () => {
const red = document.querySelector("#red");
  red.remove();
  // red.parentNode.removeChild(redCircle);
};

button.addEventListener('click', removeRedCircle);