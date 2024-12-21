const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const box = document.querySelectorAll(".cell");
const winner = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset");
let currentPlayer = "X";

for (let cell of box) {
  cell.addEventListener("click", function () {
    if (currentPlayer === "X") {
      cell.textContent = currentPlayer;
      currentPlayer = "O";
      cell.classList.add("filled");
    } else if (currentPlayer === "O") {
      cell.textContent = currentPlayer;
      currentPlayer = "X";
      cell.classList.add("filled");
    }

    checkWin();
  });
}

function checkWin() {
  for (let pattern of winPatterns) {
    let a = box[pattern[0]].innerHTML;
    let b = box[pattern[1]].innerHTML;
    let c = box[pattern[2]].innerHTML;

    if (a != "" && b != "" && c != "") {
      if (a === b && b === c) {
        winner.innerHTML = `Winner is ${a}`;
        box.forEach((cells) => {
          cells.classList.add("filled");
        });
      } else {
        const allFilled = [...box].every((cell) => cell.textContent !== "");
        if (allFilled) {
          winner.innerHTML = `It's a Draw!`;
        }
      }
    }
  }
}

resetBtn.addEventListener("click", function () {
  for (let cell of box) {
    cell.textContent = "";
    cell.classList.remove("filled");
    currentPlayer = "X";
    winner.innerHTML = "";
  }
});
