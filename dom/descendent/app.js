
// assign the correct elements to the variables
const buttonElem = document.querySelector("#wrapper>button");
const inputElem = document.querySelector("#wrapper>input");

// const buttonElem = document.querySelector("div>button");
// const inputElem = document.querySelector("div>input");

// const buttonElem = document.querySelector("#wrapper button");
//   const inputElem = document.querySelector("#wrapper input");
  

console.log(buttonElem);
console.log(inputElem.value);

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});