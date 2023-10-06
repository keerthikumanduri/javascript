// there are 2 ways to declare an object 1. is to decalare it literally and 2. is to declare it as a constructor (i.e Object.create).

// Singleton - A singleton is created when we declare by constructor. When we declare an object literally a singleton is not created.

//---------------

//object literals.

//const jsUser = {}   this is how we declare an object in js. The curly braces is called  the object , right now it is called an empty object. One difference between array and objects is that in an object we have key value pairs and in an array we dont have that. the only way we can access the array is to mention the index of the element but in the case of key value pairs we can either do key or value to access a particular element. Also the "Keys" in the objects are treated as strings by js. In the example below we have not explicitly put the key name as a string but the program automatically treats it as a string.

const mySym = Symbol("key1")


const jsUser = {
    name: "Hanuman",
    age: "55555",
    [mySym]: "myKey1", // we need to put the key in [] to print the symbol or else js treats it as a string datatype.
    location: "gandhamadana mountain",
    email: "hanuman@gmail.com",
} // there are 2 ways to access elements inside the object 



console.log(jsUser.name) // or 

console.log(jsUser["name"]); // or this. notice the we have used the key name as a inside [] and "" this is because js treats the keys as strings so we need to explicitly mention the quotations. If we need to access an element by the first method no need of "" . The second method is much preferred because if the key value is given like "location" which is inside quotation we cannot access the element using the "." method. 
console.log(jsUser[mySym]);


jsUser.email = "rama@hanuman.com" // this is how we can change or override a value.
Object.freeze(mySym)
jsUser.location = "Kambhojam" // this is how we can freeze the object so that we cannot override.
console.log(jsUser);

console.log("------------------------------------------------");

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${ this.location}`); //we can reference elements in objects using string interpolation method. .this() takes the object we are currently working on (see line 40) and we use a "." refer our element.
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());