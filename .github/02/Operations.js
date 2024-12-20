//Operations
/*
   + =>addition operator
   - =>subraction operator
   / =>divison operator; returns quotient
   % =>modulus operator; returns remainder
   ** => power operator
   ++ => increment operator; used both prefix and postfix
   -- => decrement operator; used both prefix and postfix
 */

//Prefix and Postfix
let a = 3;
const b = ++a;  //PREFIX
console.log(`a:${a},b:${b}`);// 4,4 ; the value was returned after incrementation 

// the backtick(`) character here is used instead of tradition string concaetation as it is more flexible to embed expressions in strings
//backticks(`) are used todefine template literals
// backtick(`) is useful in string interpolation, mutliline stings and expressions inside tempalte literals
/*
  String Interpolation:  `a:${a}`;
  Mutliline Strings: `You are 
    Gay`;
  Expressions inside Template literals: `a is the value $(x+y)` ;
 */

let c = 5;
const d = c++;  //POSTFIX
console.log(`c:${c},d:${d}`);// 6,5 ; the value was returned before incrementation

