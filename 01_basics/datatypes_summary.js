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


 //***********************************************************************

 // stack memory (primitive), heap memory (non-primitive ).

 // stack memory has all the primitive datatypes, for example when we do a console.log on primiive data types they are assigned a copy not the original form.

 // heap is assigned a reference 

 let infoOne = { 
    name: "hanuman",
    age: "~",
 }

 let infoTwo = { 
    name: "hanuman",
    age: "~",
 }

infoOne = infoTwo

infoTwo.age = "Chiranjeevi"

console.log(infoOne);
console.log(infoTwo);

// imagine stack cells one oveer the other. and imagine another big cell called heap. when different variable area created they are assigned some area in memory. all the primitive data types are only accessed from the same stack as an copy of the main file. but in the case of heap every variable is assigned an actual main reference . therefore in lines 46 to 61 two objects are defined and they are set equal, both of them actually access the main reference from the memory , hence if one of the value is changed the other changes too.