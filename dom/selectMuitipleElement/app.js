// In this scenario, we are looking for a list of elements gathered in one variable - rather than only one element.
// Assign the list items in the view to the variable 'listItems' by using an appropriate selector method.
// Once you have completed the code below, verify it by hovering over the list items until all items have the value 'ON'

const listItems = document.querySelectorAll("ul>li");

// console.log(listItems);
// listItems.forEach((i) => {console.log(i.innerText)});


const handleHover = (event) => {
  const currentText = event.target.innerText;
  return event.target.innerText = currentText === 'ON' ? "OFF" : "ON";
};

if(listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover));
};