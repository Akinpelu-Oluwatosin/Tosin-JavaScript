function getEvenOrOdd(number){

const prompt = require('prompt-sync')();



let Num = prompt("Guess the number")
if(Num % 2 === 0) return "EVEN" 
else
return "ODD"
}

console.log(getEvenOrOdd)