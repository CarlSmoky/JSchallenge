

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const input = document.querySelector(".input");
  const status = input.value;
  input.value = status === "OFF" ? "ON" : "OFF";
})