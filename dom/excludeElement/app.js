// In this scenario, you need to query all list items that belong to the list with id 'list'. But, exclude the ones with id 'disabled'
// Assign those items to the variable 'listItems' by using an appropriate selector method.
// Once you have completed the code below, verify it by clicking the button. The respective items should change their text.

const listItems = document.querySelectorAll("#list>li:not(#disabled)");

console.log(listItems);
const btn = document.querySelector('#button');
btn.addEventListener('click', () => {
  listItems.forEach((item) => {
    const currentText = item.innerText
    item.innerText = currentText === "OFF" ? "ON" : "OFF";
    })
});