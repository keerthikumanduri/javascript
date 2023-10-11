// this keyword talks about the current context .

const user = {
    username: "keerthi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // here to use the current context we use "this" keyword to access the current items inside the current scope. But what happens when we go outside the scope of the object?
        console.log(this);
    }

}

// user.welcomeMessage() // this runs normally
// user.username = "rama" //here we changet the current context from keerthi to rama so now rama prints. 
// user.welcomeMessage()


// console.log(this); // when we run this statement we get an empty object, But when we do it in the browser the global object which is called the window pops.




// function chai(){
//     let username = "keerthi"
//     console.log(this.username); // this line doesn't work because we figured out that this cannont be used inside functions but can be used inside objects.
// }

// chai()


// arrow functions.

const chai = () => {  // this is the arrow function. we remove the function key word and put =>
    let username = "keerthi"
    console.log(this.username);

}

chai()
// some imp takeaways - running this inside functions outputs undefined, but in objects would give {}, in browser would give window.


// const addTwo = (num1, num2) => {         basic arrow function.
//     return num1 + num2
// }


// const addTwo = (num1, num2) => (num1 + num2) // this is called implicit arrow function , we remove the {} and the return statement and put all in one line inside (). this gives same output.

// to return an object we do the followings
const addTwo = (num1, num2) => ({username: "keerthi"}) // to return an object we always need to do this notation ({})

console.log(addTwo(3,2));