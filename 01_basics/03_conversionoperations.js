let score = "55abc"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


//NOTES

//"55" => 55 - whenever we try to convert a number to a number it can easily be converted to a number.

//"55abc" => NaN - Whenever we try to convert a term like 55abc to a number it gives an output as NaN(not a number). but the type of 55abc is still a number.

//true => 1; false =>0

//let isLoggedin = "" //here we are trying to check if the number 1 is boolean(true) or not.

//let booleanIsLoggedIn = Boolean(isLoggedin)
//console.log(booleanIsLoggedIn);

//it is indeed boolean since the output we got is 1 which tells that it is TRUE.Therefore numbers can be converted to boolean.

// when we assign a value of :

// 1 => True; 0 => false
// "" => False
// "Rama" => True
 
//let someNumber = 55

//let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//here above we have converted a number to string.


//operations

let value = 3
let negValue = -value
console.log(negValue);

//some basic operations
/* 
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
*/

let str1 = "hello"
let str2 = " Hanuman"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // op - 12
console.log(1 + "2"); // op - 12
console.log("1" + 2 + 2); // op - 122
console.log(1 + 2 + "2"); // op - 32

console.log((3 + 4 ) * 5 % 3); // write structured code.


let GameCounter = 100
++GameCounter
console.log(GameCounter); //here ++ is the increment oper


//assignment -  read about increment operator in mdn docs.

/*

PREFIX INCREMENT
let x = 5;
let y = ++x;
// x is now 6, and y is also 6
here , we first increase the variable by one and use it in the expression next.
therefor the expected output is x = 6 ; y = 6.

POSTFIX INCREMENT

let x = 5;
let y = x++;

here we first use the value of x which is 5 and then increase x by one to use it in the expression.

therefor x = 6; y = 5.

*/
