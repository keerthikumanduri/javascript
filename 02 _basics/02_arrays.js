const marvel_Heroes = ["Thor", "Ironman", "Spiderman"]
const dc_Heroes = ["superman", "flash", "batman"]

//marvel_Heroes.push(dc_Heroes) // here the .push() inserts the entire array inside the marvel_heroes array but what we need is a single array with elements from both the arrays. Arrays can allow anytype of data , here it has treated dc heroes as a single elements inside the marvel heroes array.
// console.log(marvel_Heroes);

//const allHeroes = marvel_Heroes.concat(dc_Heroes)
//console.log(allHeroes); // now we get a good value using the .concat() method. op - [ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const all_Newheroes = [...marvel_Heroes, ...dc_Heroes] // here we have used something called as a spread operator. Basically we put ... followed by the array name to spread the elements inside the array into a new array, we can add as many arrays as possible. This is a much easier method.
console.log(all_Newheroes);

const another_Array = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, 11, [12, 13] ]] // here we have arrray inside an array inside and so on. The way to print all the elements inside the array into a single array is by using the method called .flat()

const real_Another_Array = another_Array.flat(Infinity)
console.log(real_Another_Array); // inside the .flat() we can give the depth to resolve the array into elements into the main array. or we can just use the depth as infinity so that it automatically sorts out the depth.

// --------------------------------------------------------------

console.log(Array.isArray("Hanuman"))// here we are asking if the string is an array or not, the answer is false. but we need to convert it to an array then we can use the step below.
console.log(Array.from("Hanuman")) // the .from() converts the string to array.


console.log(Array.from({name : "Hanuman"})); // now this is an interesting case here we have added an object into the .from() the output will be an empty array. This is because the program doesnt know if it should make the key's as arrays or values as arrays.(Because we have key value pairs. here key is "name" and value is "Hanuman")

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3)); // here .of( ) Returns a new array from a set of elements. 


//assignment - .isArray(), .from(), .of()