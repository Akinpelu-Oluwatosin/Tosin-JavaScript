const prompt = require('prompt-sync')()

let capital = paris

let input = prompt("What’s the capital of France")

if(input === paris)
console.log("CORRECT")

else
for(let repeat = 0; repeat <= 3; repeat++)
console.log("Try Again")