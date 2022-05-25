// Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible.
// Your goal is to pop all the balloons one after the other.

const list = document.getElementById('list');
const listItems = list.querySelectorAll('li');
listItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    // e.target.style.display = "none";
    e.target.style.visibility = "hidden";
  });
});


