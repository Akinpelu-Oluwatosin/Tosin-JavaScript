function checkpassword(password){
const prompt = require('prompt-sync')();

let password = prompt("Enter a password")
if(password === "secret123" ){
 return Access granted! Welcome
}
else{
return  Access denied
}

console.log(checkpassword)