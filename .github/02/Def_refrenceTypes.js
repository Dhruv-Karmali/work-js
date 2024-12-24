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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

//Stack(Primtive types are stored & all variables) & Heap(Non-Primitive are stored)

//Primtive Types- string, number, null, undefined,BigInt,Symbol,Boolean
/*
let UserOne="Summer7339"
let UserTwo=UserOne

UserTwo ="DoggoTysu"

console.log(UserOne);//No Change here
console.log(UserTwo);//Change is doen

let User1={
    Id:"dhruv@google.com",
    Name:"Dhruv",
    Age:18
}

let Var=User1
Var.Id="dhruv8271@google.com"

console.log(User1.Id);//Both Changed
console.log(Var.Id);
*/
/*
let myFunc= function(){
    Var="New Variable"
    console.log(Var)
}

myFunc.Var="Another Variable"
console.log(myFunc.Var)// returns the value

myFunc();// Var in function doesn't change even though the outside one and the inside one share the same name
*/

let myFunc= function(){
    myVar="New Variable"
    console.log(myVar)// New Variable
   // console.log(Var) => Variable is not defined inside function
    console.log(myFunc.Var)// Another Variable
}
myFunc.Var="Another Variable" 

//myFunc();
//console.log(myFunc.myVar) => undefined

/*                                                %%%   NOTE  %%%
    function ExampleFunc(){
        Variable=Val1 => Exists only inside the function 
    }
    ExampleFunc.AnotherVariable=Val2 =>Exists both inside and outside the funciton; but have to use (ExampleFunc.AnotherVariable) 
*/

//Example 1
/*
function FavHeros(){
    Marvel="Thor"
    console.log(Marvel)
}
FavHeros();//Thor
console.log(FavHeros.Marvel)// undefined
*/

//Example 2
function FavVillians(){
    DC="Joker"
    console.log(DC)
    //console.log(MARVEL) => MARVEL is not defined inside this function
    console.log(FavVillians.MARVEL)
}

FavVillians.MARVEL="Thanos"
console.log(FavVillians.MARVEL)

FavVillians();

let Heros=["SuperMan","BatMan","IronMan","CaptianAmerica","Thor","GreenLantern"]
let SuperHeros=Heros

SuperHeros[5]="Hulk"// Changes 5th Index of Heros too

console.log(Heros)
console.log(SuperHeros)//Same OutPut 

Arr123=[1,2,3,12,23,31,"Dhruv",Symbol("Dhruv"),null,undefined]
console.log(Arr123)
