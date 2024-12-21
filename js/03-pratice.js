
// q1 print all even numbers from 0 to 100

for ( let i= 0 ; i<=100; i++){
    if(i%2 == 0){
        console.log(i);
    }
}


//q2 create a game where you start with any random game number . ask the user to keep the gussing  the game number until the user enters the correct value


let guess = 50;

let userguess = prompt("enter any number");
if (userguess == guess) {
  console.log("correct");
} else {
  console.log("wrong");
}