let score = "karan"

// console.log(typeof score); 
// console.log(typeof (score)); 
/*"33" => string
   33 => number
   true => 1
   false => 0
   null => 0
   33abc, undefined => NaN-Not a Number*/ 

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
// console.log(valueInNumber); 


let isLoggedIn = "Karan"

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

/* 1 => true 0 => false
"" => false 
"Karan" => true*/

let randomNumber = 35
// console.log(typeof randomNumber);

let stringNumber = String(randomNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// -----------Operation----------------

let value = 3

let negValue = -value
// console.log(negValue);

// console.log(20 % 3);

let str1 = "Hello "
let str2 = "Karan"
let str3 = str1 + str2 
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + "2");
// console.log(1 + 2 + "3");     ToPrimitive ecma for more details
// console.log("1" + 2 + 3);

// console.log(1 + 2 * 5 / 2);   confusing code try to avoid or else use ()

// console.log(+true);
// console.log(+"");

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);    //equality check and comparison works differently, comparison converts null to a number treating it as a number 

// console.log("2" === 2);      // strict checks its datatypes also 
// console.log(typeof "2");

