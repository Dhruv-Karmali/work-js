//Sting Concatenation & old way of writing code
const Name = "Dhruv" // Defining String using string function
const LastName = " Karmali"
const FullName = Name + LastName // Messy and hard to read when a lot of strings are concated

//String Interpolation & new way of writing String
const GiveName= `My name is ${Name} and my last name is ${LastName}`
//console.log(GiveName)// My name is Dhruv and my last name is  Karmali
//console.log(GiveName[0])
//console.log(GiveName[5])
//console.log(typeof GiveName)// String

//Another way to define a string using string constructor
let Hobbies= new String("I love to code")// Converts String into an Object 
//console.log(Hobbies)// [String: 'I love to code'] => Simply a way to format wrapped string object
//console.log(Hobbies[0])
//console.log(Hobbies[3])
//console.log(typeof Hobbies)// Object

let Var = Hobbies
Var.String="I love Rock Climbing"// Adding a property to Hobbies
//console.log(Var)//[String: 'I love to code'] { String: 'I love Rock Climbing' } => It doesn't affect the original value
//console.log(Hobbies)

//String methods