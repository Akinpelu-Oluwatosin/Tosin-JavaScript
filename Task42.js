const prompt = require('prompt-sync')();

let pin = "1234"

for (let num = 0; num < 3; num++) 

let inputPin = prompt("Enter your pin:")

if (inputPin === pin) 

console.log("Access granted!")

amount = 3

else 
console.log("Try again!")

if (amount === 2) 
console.log("Locked!")