// const tinderuser = new Object()  - one way to declare an object. or the one below. This is a singleton object

const tinderuser = {} // This is a non singleton object. Both this and the method above create the same empty object.
tinderuser.id = "123abc" 
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false
//console.log(tinderuser); // basic stuff , we just declared a const and created some properties inside and then printed it.

const regularuser = {   // Here we have nested objects inside objects inside objects.
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "keerthi",
            lastname: "vardhan"
        }
    }
} //  to access elements inside this nested objects we just have to use the dot method as below.

console.log(regularuser.fullname.userfullname.firstname);

// combining objects.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2} // here we get the same problem as arrays. What we want is all the elements inside a single object but we got 2 objects inside a single object.

//const obj3 = Object.assign({} , obj1, obj2, obj4) // the .assign() puts all the elements from obj 1 and obj 2 into a single object. This is what we want but there is a simpler and more modern method. Notice that we have also used an empty object on line 29, this is because the way the syntax works here the first element is treated as the Target (in this case it is the {}) and all the remaining elements are the sources which are put inside the target. Although omitting the empty object would still give the same output it is really a good practice in the production level. This .assign() method works just fine but we have a much easier method below.

const obj3 = {...obj1, ...obj2, ...obj4} // way easier.
console.log(obj3);

// *********************** the following is code for the values from the databases. When they come from databases it is usually an array of objects like [{}, {}, {}].

const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    }

    
] // this is an array of objects. So how do we access the elements in these array?

console.log(users[1].email); // this is how we access data inside the array of objects.

// ---------------------
// There is a way to print the keys only or values only which is very useful.

console.log(Object.keys(tinderuser)); // here we get an output of only the keys.
console.log(Object.values(tinderuser)); // here we get an output of only the values.
console.log(Object.entries(tinderuser)); // here we get an output of both keys and the values , here we get an array inside an array.

console.log(tinderuser.hasOwnProperty('id')); // The .hasOwnProperty() Determines whether an object has a property with the specified name. Returns boolean value.

