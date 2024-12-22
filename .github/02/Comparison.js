// Comparison Operators (<,>,>=,<=) &Equality Check (==,!=,===,!==)
/*
console.log("2">2)//implicit conversions
console.log("02"<=3)
console.log(true==1)//Boolean; true
console.log(false==0)//true
console.log(true==56)//false;
//  @@@ IN EXPLICT BOOL COVERSION ANY VALUE EXCEPT "" & 0 CONVERTS TO TRUE BUT DOING EQUALITY COMPARING ONLY 1 RETURNS TRUE @@@

console.log("A"==65)//ASCII values; false => doesn't impl. convert ASCII to decimal
console.log(0x41==65)//true => does implicitally convert hexa to decimal value
console.log(0x41=="A")//hexa to ascii value; false => doesn't implicitally convert hexa to ASCII value
*/
/*
console.log(null>0);//false; Number(null) returns 0
console.log(null<0);//false
console.log(null==0);//false @@@
console.log(null===0)//false
console.log(null>=0);//true => Comparison converts null to 0 implicitally
console.log(null<=0);//true
*/

console.log(undefined>0);//Number(undefined) returns NaN; false
console.log(undefined<0);//false
console.log(undefined==0);// Loose Equality checks only value; false
console.log(undefined===0);// Strict Equality checks value and datatype; false
console.log(undefined>=0);//false
console.log(undefined<=0);//false


