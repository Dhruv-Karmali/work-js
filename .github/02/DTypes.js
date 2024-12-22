"use strict";//treats all code as new JS code

//alert(2+3) we are using node JS not browser; alert is a browser function

let name= "Dhruv" //String
let age= 18 //number => 2^53
let veryBigNum;//Bigint => for values larger than number can hold; used by websites like Reddit
let BigNumber= 1830174169103142907n// n as suffix explicitally converts the var to BigInt
//Boolean True or False
//NaN

//null is a standalone value; @@@it is an object in JS@@@
let you= null;
//console.log(typeof you)// object

//undefined means that a value is yet to be assigned
let me=undefined;
//console.log(typeof me)// undefined

//symbol =>for defining uniqueness for a var or func
let Id=Symbol("1234")
let AnotherId=Symbol("1234")
console.log(Id==AnotherId)//false => even though the value given is same Symbol makes each one unique 

//object
/*console.log(typeof me)// here var is taken as var
console.log(typeof (you))// here var is taken as method*/

// ###Data Type Conversion###

//string to number
let score="Dhruv"
let val= Number(score)
//console.log(typeof val)
//console.log(val)

/* "33"=>number;33
   "33A"=> number; vaule=>NaN
   ""=> number;value=>0
   "Dhruv"=>number;value=>NaN */

//null & undefined to number
let x=undefined
let y=Number(x)
//console.log(typeof y)
//console.log(y)

/* null=> number;value=>0
   undefined=> number;value=>NaN */

//Boolean to number
let T=false
let F=Number(T)
//console.log(typeof F)
//console.log(F)

/* true=>number; 1
   false=>number;0 */ 

// to Boolean
let sand=-12
let mud=Boolean(sand)
//console.log(typeof mud)
//console.log(mud)

/*""=>Boolean; false
  "Dhruv"=>Boolean;true 
  1 or any other number=>boolean;true
  0=>boolean;false
  */

// to string
let camp=""
let strcamp=String(camp)
console.log(typeof strcamp)
console.log(strcamp)

/*33=>string;33
  true=>string;true
  null=>string;null
  undefined=>string;undefined
  ""=>string; */
