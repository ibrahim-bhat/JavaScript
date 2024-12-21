// **Events in JavaScript**
// Events are actions or occurrences that happen in the browser, like clicking a button or pressing a key.
// Events notify code of "interesting changes" to trigger specific logic.

// Common types of events:
// 1. Mouse Events: click, double click, mouseover, mouseout
// 2. Keyboard Events: keypress, keydown, keyup
// 3. Form Events: submit, change, focus
// 4. Window Events: load, resize, scroll

// **Event Handling in JavaScript**
// There are multiple ways to handle events in JS, including inline, property handlers, and `addEventListener`.

// inline
/* 
  <button onclick="buttonClicked()">Click Me!</button>

    <script>
        // Function to handle the event
        function buttonClicked() {
            console.log("Button was clicked using inline handling!");
            alert("Button clicked!");
        }
    </script>*/

// Example 1: Using property handler
let btn = document.getElementById("btn1");
btn.onclick = () => {
  console.log("Button was clicked!"); // Outputs: Button was clicked!
};

// Example 2: Using `addEventListener` (preferred modern approach)
btn.addEventListener("click", () => {
  console.log("Event triggered using addEventListener!"); // Outputs: Event triggered using addEventListener!
});

// Example 3: Handling multiple events
btn.addEventListener("mouseover", () => {
  console.log("Mouse is over the button!"); // Outputs: Mouse is over the button!
});

// **Output Explanation**
// When you click `btn1`, you'll see "Button was clicked!" and "Event triggered using addEventListener!" in the console.
// When you hover over the button, you'll see "Mouse is over the button!".
