const todo = document.querySelector(".todo-container");
const inputBtn = todo.children[1];
let input = inputBtn.children[0];
const btn = inputBtn.children[1];
const list = todo.lastElementChild;
const erroe = document.getElementById('error');

function createListItem(text, key) {
  const newli = document.createElement("li");
  newli.classList.add("li");
  newli.textContent = text;
  list.append(newli);

  // Add date
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  const dateEle = document.createElement("p");
  dateEle.classList.add("date");
  dateEle.textContent = formattedDate;
  newli.appendChild(dateEle);

  // Add Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    newli.remove();
    if (key) {
      localStorage.removeItem(key);
    }
  });
  newli.appendChild(deleteBtn);

  // Add Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("done-btn");
  doneBtn.addEventListener("click", function () {
    newli.style.textDecoration = "line-through";
  });
  newli.appendChild(doneBtn);
}

// Load existing tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("todolist")) {
      const value = localStorage.getItem(key);
      createListItem(value, key);
    }
  }
});

// Add new item to localStorage and the list
btn.addEventListener("click", function () {
  const addText = input.value.trim();

  if (addText === "") {
    alert("Please enter some text.");
    return;
  }

  const key = `todolist${localStorage.length + 1}`;
  localStorage.setItem(key, addText);
  createListItem(addText, key);

  input.value = "";
});
