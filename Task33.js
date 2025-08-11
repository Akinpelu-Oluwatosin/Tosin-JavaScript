const prompt = require('prompt-sync')();

let initial = 25 

let guess = prompt("Guess a number: ")

if(guess > 35)
console.log("Too High")

if(guess < 25)
console.log("Too Low")

if(guess == 25)
console.log("Correct")

else
console.log("Invalid input")S
