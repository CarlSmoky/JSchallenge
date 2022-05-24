// Enter a new todo in the input field. Once you click the button, the new todo item should appear at the bottom of the list.
// Confirm your code by creating a new todo!

const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  const inputText = input.value;
  const listItems = document.getElementById("list");
  const newListItem = document.createElement('li');
  newListItem.innerText = inputText;
  listItems.appendChild(newListItem);
})