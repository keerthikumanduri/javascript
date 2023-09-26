"use strict"; //treat all js code as new version.

//alert(3+3) when you try to run this alert code you get an error but if you do it in the chrome devtools console you will not get an error , the reason is currently all our JS code is executed by nodejs and not the browser.

console.log(3 
    +
     3) // code readability should be top priority.

console.log("keerthi")//this is preferred.

//below are some datatypes.
let name = "keerthi"
let age = 18
let isLoggedIn = false
let state;
//below are some primitive datatypes.
// number => In JavaScript, Number type can only represent numbers less than 2 to power 53
// bigint =>if you need to use a larger number than that, you can use the BigInt data type.
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//below is a special datatype.
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
//null is a representation of an empty value that is usedfor timebeing.

console.log(typeof isLoggedIn); //boolean.