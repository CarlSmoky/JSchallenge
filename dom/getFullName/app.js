// When the button is clicked, combine the names of the first two input fields. Insert the full name in the third input field.
// Hint: Check if your code still works if you change the first or last name.
// Confirm your code by clicking the button!

const button = document.querySelector("#button");
button.addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const fullName = document.getElementById('fullName');
  fullName.value = firstName + " " + lastName;
});