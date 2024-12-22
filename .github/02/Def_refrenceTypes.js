//Data types are of two types Primitive & Non-Primitve

//Primitve(Call By value i.e. when assigning to another var value is returned)- string,number,bool,BigInt,Symbol,null,undefined - 7 Types

//Non-Primitive(Call By reference)- objects,functions, array

let family=["Papa","Mummy","Dhruv","Tysu","Nidhi","Kunal","Kriti"];// Array 

let User={
    name:"Dhruv",// key & value pair
    age:18
}// Declaring a object an assiging it to var
console.log(User.age)// Accessing value using key in object 

function sayHello() { //Defining a function
   console.log("Hello World")
}

sayHello();// Calling a function using func name

const myFunction = function(){ //Declaring function and assigning it to a var
    console.log("HI")
}
myFunction();//var name is used to call func