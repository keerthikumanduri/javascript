 // primitive (call by value)

 // 7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt
 // following are examples for different datatypes.
  const score = 100 
  const scoreValue = 100.3
  const isLoggediIn = false
  const outsideTemp = null
  let userEmail;

  const id = Symbol('555')
  const anotherId = Symbol('555')

  console.log(id === anotherId);


 // Reference types (Non Primitive)

 // Array, Objects, Functions, 

 const heroes = ["Rama", "Hanuman"];// this is an array.

 let myObj = {
    name: "Hanuman",
    age: 1000000000,

 }// this this how an object is declared and used. basically the stuff inside the curly brackets is called an object. datatype could be anything.

 const myFunction = function(){
    console.log("hello world");//this is a function.
 }

 console.log(typeof (outsideTemp));// typeof tells us what datatype is used.

 //usually the type of all non primitive datatypes is always an object, but especially when the datatype of the fuction is checked it is called function object. this is not shown in the terminal but in the documentation.