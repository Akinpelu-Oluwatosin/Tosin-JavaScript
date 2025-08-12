const prompt = require('prompt-sync')();

let adultTicket = 10
let childTicket = 5

let age = prompt("Enter your Age")

if(age <= 18)
console.log("The ticket ptrice is  " +  adultTicket)

else
console.log("The ticket price is  +  childTicket)