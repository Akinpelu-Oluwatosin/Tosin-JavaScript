function findMultiple{

const prompt = require('prompt-sync')();



let Num = prompt("Guess the number")
if(Num % 3 === 0) return Num + " is a multiple of 3")
else
return Num + " is not a multiple of 3")
}

console.log(findMultiple)