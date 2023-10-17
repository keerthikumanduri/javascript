// for of loop.

const arr = [1, 2, 3, 4, 5, 6] // here we declared an array

// for (const iterator of object) {  basic for of loop syntax, here object is a broader sense of what object are we trying to loop, not just js based object.
    
// }
for (const value of arr) { // started for of loop , it automatically take condition and ends once the last element of the array is printed.
    // console.log(value);
}

const greetings = "Hello world" // we can use for of loop for string aswell.
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
} 

//maps

const map = new Map() // this is how we create a map and we use .set to set some values.
map.set('IN', 'India')
map.set('FR', 'France')
map.set('USSR', 'Russia') // map has an interesting feature if we copy one of these lines of code and try to run it again it wont print the same value twice.
// map.set('USSR', 'Russia') - This wont print again.
console.log(map);

// for (const [key] of map) {
    // console.log(key); /* if we print this we get an array , op - Map(3) { 'IN' => 'India', 'FR' => 'France', 'USSR' => 'Russia' }
//     [ 'IN', 'India' ]
//     [ 'FR', 'France' ]
//     [ 'USSR', 'Russia' ] . But we want individual values.*/ so we write the following syntax as follows on line 33 and 34.
// }

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}
// now we know that we can do a for of loop for maps but can we apply this for an object?

const myObject = {
    game1: 'nfs',
    game2: 'gsr'

}

for (const [key, value] of myObject) {
    console.log(`${game1} and ${game2}`); // here we get an error that says that myObject is not iterable.
}
// key takeaways : if we want to loop arrays we use for of loops , if we want to loop objects we use for in loops. There are also other method for these as well.