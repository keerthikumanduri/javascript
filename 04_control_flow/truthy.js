

// falsy values - ( false, 0, -0, BigInt 0n, "", null, undefined, NaN,)   these are all falsy values. these are the values where the program assumes that a certain condition is false. For example consider the code below.

// const userEmail = "" // here we have given an empty string but the program automatically assumes that the value is true for this and execute the true statement of the if condition. This is the truthy statement. since it assumes an empty string to be true.
// const userEmail = 0 // here we have a value of 0 which is a falsy statement hence prints the else statement. falsy statements are given in line 3. All the values execpt these falsy values are truthy values.
// if(userEmail){
//     console.log("Have an email.");
// } else{
//     console.log("Don't have an email.");
// }

// truty values 
// "0" if 0 is present inside the "" then it is truthy
// "false" since this is inside "" it is truthy
// [], {}, "" , function(){} these are all t ruthy 

// to check if an array is empty or not
 const userEmail = []
 if (userEmail.length == 0) {
    console.log("array is empty");  // op - array is empty
 }

// to check if an object is empty or not

const emptyObject = {}
if(Object.keys(emptyObject).length == 0){ // here Object.keys method returns an array of keys, here we are checking the the length of the array of keys is 0 or not if it is then print obj is empty.
    console.log("Object is empty");
}
