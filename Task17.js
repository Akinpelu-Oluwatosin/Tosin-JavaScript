const prompt = require('prompt-sync')();



let Temp = prompt("Enter a temperature")
if(Temp > 30) console.log("Hot!")

else if (Temp <= 30 )
console.log("Nice!")

else if (Temp < 15 )
console.log("cold")

else
 console.log("invalid number")