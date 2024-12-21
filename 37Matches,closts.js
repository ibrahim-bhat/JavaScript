// In JavaScript, matches, closest, and contains are methods used for DOM manipulation, specifically for working with elements and their relationships within the Document Object Model (DOM):
// 1. matches():
// The matches() method checks if the current element matches a given CSS selector. It returns a boolean value (true if the element matches, false otherwise).
// Example:

const element = document.querySelector('div');
const isDiv = element.matches('div'); // true

// 2. closest():
// The closest() method traverses the element and its ancestors (parents, grandparents, etc.) until it finds a node that matches the specified CSS selector. It returns the matching element or null if no match is found.
// Example: 

const elements = document.querySelector('.child');
const parentDiv = element.closest('div.parent'); // Returns the nearest ancestor div with class "parent"

// 3. contains():
// The contains() method checks if a given node is a descendant of the current element. It returns a boolean value (true if the node is a descendant, false otherwise).
// Example:

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const isDescendant = parent.contains(child); // true
// Key Differences:
// matches(): Checks if the current element matches a selector.
// closest(): Traverses up the DOM tree to find the nearest ancestor that matches a selector.
// contains(): Checks if a given node is a descendant of the current element.