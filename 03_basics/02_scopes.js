// let a = 10
// const b = 20
// var c = 30 //  of these declaration work the same. then why did we create 3 ways to declare variable? 


{} // problem arises here inside this curly braces. This {} is called scope. Don't confuse {} with object declarations which is also similar. Hfere {} is called scope which is called the scope of the function or the ifelse or if conditions.

// if(true){ // here the scope is only within the if statement so that means if we do console inside the if statement it should print it then. but we have given console outside the scope. This now prints c which is a problem. That is why var has scope related issues. the scope inside the if statement is called block scope and the variables defines outside are called global scope . we can use global scope inside block scope but not the other way.
//     let a = 10  
//     const b = 20 
//     var c = 30 
//  }

// console.log(a);
// console.log(b);
//console.log(c); 


// part 2 of scopes - about nested scope

function one(){
    const username = "keerthi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one() // as we execute one function two is also executed on line 29 since function 2 is a part of function one. but if we comment out line 29 and then run the function on line 32 it wont run.


// similar example

if (true){
    const username = "keerthi"
    if (username === "keerthi"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); this will not run because of website is declared inside the second if statement.
}

// console.log(username); here this will also not run because username doesnt have scope here.


//_------------------------intersting

function addone(num){
    return num + 1
}

addone(5) // this is a regular function.

const addTwo = function(num){
    return num + 2
}

addTwo(5)   // this is also a function that is stored inside this variable called addTwo this is also sometimes called expression.  