// Type a search term in the input field. The displayed items in the list should match your search term. The rest of the list elements should be hidden.

// onQueryChange(event.target.value)

const input = document.querySelector("#input");
input.addEventListener('input', (e) => {
  // console.log("input.value", input.value);
  // const inputValue = e.target.value;
  // const inputValue =input.value;
  // const listItems = document.querySelectorAll("li");
  // let listTextArr = [];
  // listItems.forEach(li => {
  //   listTextArr.push(li.innerText)
  //   // li.style.display = li.startsWith(input.value) ? 'block': 'none';
  // });
  // console.log(listItems);
// 
  // let listTextArr = Array.from(listItems).map(li =>{ li.innerText });

  document.querySelectorAll("li").forEach((item, i) => {
    item.style.display = item.innerHTML.startsWith(input.value) ? 'block': 'none'
  });

  // listTextArr.forEach((li, i) =>
  //   listItems[i].style.display = li.startsWith(inputValue) ? 'block': 'none');
  //       // listItems[i].style.display = li.indexOf(inputValue) > -1 ? 'block': 'none');
})