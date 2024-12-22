const todo = document.querySelector(".todo-container");

// const inputBtn = todo.childNodes[3];
const inputBtn = todo.children[1];

let input = inputBtn.children[0];
const btn = inputBtn.children[1];
const list = todo.lastElementChild;

const time = new Date();
console.log(time);


btn.addEventListener("click", function () {
  const addText = input.value;

  const newli = document.createElement("li");
  newli.classList.add("li");
  list.appendChild(newli);
  newli.textContent = addText;
  input.value = "";

  //Date
const date = new Date();
const formattedDate = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

const dateEle = document.createElement("p");
dateEle.classList.add("date");
dateEle.textContent = formattedDate; // Use formatted date
newli.appendChild(dateEle);


  //Delete btn
  let deleteBtn = document.createElement("BUTTON");
  var btnText = document.createTextNode("Delete");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.appendChild(btnText);
  newli.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", function () {
    newli.remove();
  });

  //Done btn
  const doneBtn = document.createElement("BUTTON");
  var btn2Text = document.createTextNode("Done");
  doneBtn.classList.add("done-btn");
  doneBtn.appendChild(btn2Text);
  newli.appendChild(doneBtn);
  doneBtn.addEventListener("click", function () {
    newli.style.textDecoration = "line-through";
  });
});
