const prompt = require('prompt-sync')()

let sum = 0

for (let num = 1; num <= 20; num++) 
  
if (num % 2 === 0) 

sum = sum + num
 
console.log("Sum of even  " + sum);