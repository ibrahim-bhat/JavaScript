let t = document.body.firstElementChild.firstElementChild; // Selects the first <table> element in the body
console.log(t); // Logs the <table> element

console.log(t.rows); // Logs all the rows (<tr>) of the table as a collection

console.log(t.caption); // Logs the <caption> element of the table (if it exists)

console.log(t.tHead.firstElementChild); // Logs the first row (<tr>) of the <thead> section of the table

console.log(t.tFoot); // Logs the <tfoot> element of the table (if it exists)

console.log(t.tBodies); // Logs all the <tbody> elements of the table as a collection

console.log(t.rows[1].rowIndex); // Logs the index of the second row (<tr>) in the table
