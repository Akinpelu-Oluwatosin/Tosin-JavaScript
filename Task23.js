const prompt = require('prompt-sync')();

let total = 100

let theGrade = prompt("Input a Grade score  ")

if(theGrade >= 90)
console.log("A")

else if(theGrade < 90 && theGrade >= 80)
console.log("B")

else if(theGrade < 80 && theGrade >= 70)
console.log("C")

else
console.log("F")

