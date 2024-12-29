const addBtn = document.querySelector("#add-expense-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#close-modal");
const expenseCards = document.querySelector(".expense-cards");
const totalExpensis = document.querySelector("#total-amount");

const form = document.querySelector("#expense-form");
const formAmmount = form.children[1];
const formCategory = form.children[3];
const formDate = form.children[5];
const formBtn = form.children[6];

// Showing Expense
function calculateTotalExpenses() {
  const amounts = expenseCards.querySelectorAll(".expense-amount p");
  let total = 0;
  amounts.forEach((amount) => {
    total += parseFloat(amount.textContent);
  });

  totalExpensis.textContent = `${total.toFixed(2)}`;
};

// Open modal
addBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const ammount = formAmmount.value;
  const category = formCategory.value;
  const date = formDate.value;

  let expenseCard = document.createElement("div");
  expenseCard.classList.add("expense-card");
  expenseCard.innerHTML = ` 
    <div class="expense-info">
      <h4 class="expense-title">${category}</h4>
      <p class="expense-category">Category:${category} Food</p>
      <p class="expense-date">Date: ${date}</p>
    </div>
    <div class="expense-amount">
      <p>${ammount}</p>
      <button class="delete-btn">Delete</button>
    </div>
 `;
  expenseCards.appendChild(expenseCard);
  modal.classList.add("hidden");
  calculateTotalExpenses();
});

// Remove card
expenseCards.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const expenseCard = e.target.closest(".expense-card");
    if (expenseCard) {
      expenseCard.remove();
calculateTotalExpenses();

    }
  }
});

// Close modal
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

