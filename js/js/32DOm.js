

// childer element 

console.log(document.body.firstChild);
console.log(document.body.lastChild);
let arr = Array.from(document.body.childNodes);
console.log(arr);


// accessing the parents and sbling in  DOM

console.log(document.body.firstChild);
a = document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);
console.log(a.firstChild.nextSibling);
//here for ignore the text node which gets in console we have to use firstElementChild
console.log("The first element child is ",document.body.firstElementChild);
console.log("hello");

document.body.firstElementChild.style.background = "red";
