// Ways to assign
const emailId = "dhruvna@gmail.com"
let emailPassword = "12345"
var emailState = "Jharkhand"
emailYear="2022"

// Ways to display
console.log(emailId) //Displays single value 
console.table([emailPassword, emailState, emailYear]) //Displays in tabular form ~ multiple

// Reassigning values
// emailId = "dhruv@gmail.com" ~Can't reassign const datatype values
emailPassword=23476
emailState= "Bihar"
emailYear= "2021"

console.table([emailId, emailPassword, emailState, emailYear])

/*
let is used more than var due to issues of block and functional scope
*/
let emailUser;
console.log(emailUser) // Varibles have undefined data type/value as default

