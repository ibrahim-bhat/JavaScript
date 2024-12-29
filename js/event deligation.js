// Example: Event Delegation with Dynamically Added Buttons Event delegation is a technique in JavaScript where you attach a single event listener to a parent element to handle events on its child elements, even if those children are dynamically added later. This saves memory and simplifies your code.

// HTML Structure:
// <div id="buttonContainer"></div>

const container = document.getElementById("buttonContainer");

// Dynamically add two buttons
container.innerHTML = `
  <button class="btn first-btn">Button 1</button>
  <button class="btn second-btn">Button 2</button>
`;

// Event delegation to handle button clicks
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("first-btn")) {
    console.log("First button clicked!");
  } else if (e.target.classList.contains("second-btn")) {
    console.log("Second button clicked!");
  }
});
