const darkBtn = document.querySelector("#darkBtn");
const darkImg = document.querySelector("#darkImg");
darkBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkBtn.lastChild.textContent = "light mode";
    darkImg.setAttribute("src", "./img/quyosh.svg");
  } else {
    document.body.classList.add("light");
    darkBtn.lastChild.textContent = "dark mode";
    darkImg.setAttribute("src", "./img/oy.svg");
  }
});
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const ulList = document.getElementById("ulList");
const formTodo = document.getElementById("formTodo");
formTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = inputText.value;
  inputText.value = "";
  ulList.innerHTML += `<li class="list-item">${text}</li>`;
});

const listItem = document.getElementsByClassName("listItem");
listItem.addEventListener("dbclick", () => {
  listItem.textContent = "";
});
// submitBtn.addEventListener("click", () => {

// });
