//generate a random number and store it into variable
//input is taken from user   to tell weather guess is == < >
//100 - (no of guess) will be the score
//numbe should be between 1 - 100

const range = 100;
let randomNumber = Math.floor(Math.random() * range);
console.log(randomNumber);

let input = prompt("Enter a number to check");
let score = range -1 ;

document.write(score)   

if (input > range || input == "") {
  document.write("Enter the valid Input");
} else {
  if (input == randomNumber) {
    document.write("Corret number");
  } else {
    document.write("wrong number <br>");
    if (input > randomNumber) {
      document.write("Input number is greater");
    } else if (input < randomNumber) {
      document.write("Input number is smaller");
    }
  }
}
