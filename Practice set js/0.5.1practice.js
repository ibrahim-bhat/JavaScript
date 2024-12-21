

// console.log('hello world');

//create the element os 3 childern ,  now change the color of first and last element to green


const nav = document.querySelector('.navbar');

let first = nav.children[0];

    first.style.backgroundColor = 'red';

let second = nav.childern[1];

    // second.style.backgroundColor = 'red';
let child = second.childern[1];

    console.log(child);