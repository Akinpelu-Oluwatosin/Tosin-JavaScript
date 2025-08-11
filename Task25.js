let tryAgain = true

while (tryAgain) 

let Password = "PYTHON"

let wrongInput = false

for (let i = 0; i < 3; i++) 

let guess = prompt("Enter the password:")
    
if (guess === correctPassword)
console.log("Success!")

wrongInput = true

 break

else 
console.log("Try again!")

if (wrongInput)

console.log("Locked out!")


 
