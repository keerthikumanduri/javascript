// controlflow
// if

// if(true){ // true means the code inside the scope executes 

// }
// if(false){ // false means the code inside the scope doesn't execute




// if (2 === "2"){// === is called strict equal.
//     console.log("executed");
// }

// if else

// const temp = 66
// if(temp <= 41){
//     console.log("The temperature is less than 41 degrees.");
// }
// else{
//     console.log("The temperature is greater than 41 degrees.");
// }

// const score = 200 
// if(score > 100){
//     let power = "Fly High"
//     console.log(`User power: ${power}`);
// }
// console.log(power);  here we cannot access power because the power because on line 29 the scoper of the variable power ends and you cannot call the variables outside the scope.

// there is also a short hand notation for if statements as follows.
// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2"); like so, But what is the scope here since we did not use any {}, This method is called implicit scope that means that the program autoamatically assumes that the scope is present. writing the console logs in the way that we did is genarally not a good practice.

const userLoggedIn = true
const debitCard = true
const googleLogin = false
const emailLogin = true


if(userLoggedIn && debitCard){ // && is called the and operator it checks if all the values are true only then will it execute the code.
    console.log("You are allowed to shop.");
}
if(googleLogin || emailLogin){ // || is used to see if one of the values true and prints it.
    console.log("You are logged in");
}


// nullish coalescing operator (??): null, undefined

// let val1;
// val1 = 5 ?? 10, - op 5 Nullish coalescing operator is specifically designed for null an undefined. here in this example we have created val1 but have not assigned any value to it. Then on line 54 we said the val1 = 5 ?? 10 which means it can take any of these 2 values. Although it can take any values it just took the first value because its first.
// val1 = null ?? 5,  - op 5 because when you have a value why not take it? same with undefined aswell.

//terniary operator

// condition ? true : false

const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("less than 80") : console.log("more than 80");