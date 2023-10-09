// function: we write a piece of code , now what if we want to use that piece of code again ? we can write it again but this is not effective, so we can define a function so it can do the same job whenever we call it any number of times.

function name(){
    console.log("R");
    console.log("a");
    console.log("m");
    console.log("a");
} // here we have defined a function , now we can call this function whenever we want just by using name(). this is the name of the function that we have used for this particular example.

// name() // this call and uses our function.


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result // after the return statement no other part of code works.
    //we can directly return a value instead of creating a variable and storing the value there. look next step.
    return number1 + number2
}


// here we have defined a function that adds two numbers. here when we have defined a function and put some data into () it is called parameters, when we call the function and input the values in it , then it is called arguments.

//addTwoNumbers(1, 4) // we input 2 numbers we get 5(in this example). but what happens if we input a string since we have not explicitly mentioned in our function code that we only want numbers javascript automatically uses its own logic to combine them next to each other

addTwoNumbers(1, "4") // outputs 14.
addTwoNumbers(1, "a") // outputs 1a.
addTwoNumbers(1, null) // outputs 1. // well learn how to print only numbers or print only the type we want much later.

const result = addTwoNumbers(3, 5)
console.log("Result: ", result); // here we want to print "Result: 8", but when we run this we get "Result:  undefined", we think that since there is console.log inside the function that we created we get an output of "Result:  8" , bu this is not the case since we dont have a return value inside the function which returns the execution value to print. we have redone the code again on line 16 take a look. now it returs a value of 8 and prints it.

//-----------

function loginUserMessage(username = "rama"){
    if(username === undefined){                   // since we are getting an output as undefined we said here that if usename === undefines then print the next line of code and then return the value.
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in` // here we created a new function that takes a username as a parameter and we as a user should put our username as an argument then we print it.
}

console.log(loginUserMessage("Hanuman"));

// But what happens if there is now input username given? The code then outputs undefined just logged in. Here we can implement an if statement that if there is no input please display a certain message. 

//we can also set the username = a certain name in line 37 as a default value. if we do that the code from line 38-43 would never work since we are giving the value as preset. So if anyone does not input a value it automatically uses the preset value. If the value is given then the given value is used.


// -------------part 2

function caluculateCartPrice(val1, val2, val3, ...num1){   // here the (...) is called the rest operator , this is the same notation for the spread operator too. when we run this we get an array with all the values. As we keep on adding items in line 60 we get more values in the array. Notice we have also added val1 , val2 and so on this means that the first element in our array is assigned the val1 and so one and the rest are printed in the array , the assigned values are not printed in the array for ex here in this case the output is - [ 600, 700 ]
    return num1
}

// console.log(caluculateCartPrice(2)); This is all good and we get an output of 2. Here we are considering an example of a shopping cart and there are many items inside the cart which are to be calculated . How do we caluculate all of them?

console.log(caluculateCartPrice(200, 400, 500, 600, 700)); // How do we calculate the total of this cart. Here we use the Rest operator.

//---------- how do we pass object in functions?

// lets create an object first.

const user = {
    username: "Hanuman",
    price: 199
} 

// now we define a function and pass our object into it.

function handleObject(anyObject){         // here we have provide a generic parameter so that any object can be inserted.
    console.log(`The user is ${anyObject.username} and the price is ${anyObject.price}`); // here inside the ${} that part of code invokes the username and price of the object that we passed into the function.
}

// handleObject(user) //we call the function here.
// we can also directly input our arguments like follows.
handleObject({
    username: "Rama",
    price: 555
})

// we have passed an object into the function, now lets pass an array.

const myNewArray = [200, 400, 600, 100] // now we want to define a function that accepts an array and returns its second value.

function returnSecondvalue(returnedvalue){
    return returnedvalue[1]
}

console.log(returnSecondvalue(myNewArray));
// we can also directly input our arguments like follows.
console.log(returnSecondvalue([200, 400, 600, 100]));