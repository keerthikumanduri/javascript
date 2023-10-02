const myArr = [0, 1, 2, 3, 4, 5] // an array is always inside square brackets. An array can have mix of datatypes. Array is zero indexed.
 
console.log(myArr[3]); // to access a value inside an array we use the index number to get the value.

 //shallow copy and deep copy. More on that later.

const myHeroes = ["rama", "hanuman"]

const myArr2 = new Array(1, 2, 3, 4)

// below are some methods in array.

myArr.push(7) // .push(7) adds an element into the array.
myArr.pop() // .pop removes the last elements inside an array.
myArr.unshift(9) // .unshift() adds an elements that we specify at the beginning of an array.
myArr.shift() // .shift() removes the first element , dont need to pass a value inside shift. 
console.log(myArr.includes(9)); // .include() checks if an element is present in an array. It returns a value in boolean.

let newArray = ["Rama", "Hanuman", "Lakshmana"]
console.log(newArray.indexOf("Hanuman"));// .indexOf method tells us at which index a particular element is present.

let newArrayTwo = myArr.join()
console.log(newArrayTwo); //.join converts elements in an array to a string.

//slice and splice.

console.log("A ", myArr); // here we print an array that prints - A  [ 0, 1, 2, 3, 4, 5 ]

const myArr3 = myArr.slice(1, 3) //  here we have used .slice(1, 3) which gives an output of [1, 2] - since we have metioned the limit in slice 3 in exclusive.
console.log(myArr3);

console.log("B ", myArr);
const myArr4 = myArr.splice(1, 3)// here we do the same thing but use .splice() .
console.log(myArr4); // This now prints [ 1, 2, 3 ], these are the values that the splice method took out from the original array called myArr. here 3 is inclusive. 
console.log(myArr); // if we print the original array we get [ 0, 4, 5 ] since we used splice to remove those values.

// 