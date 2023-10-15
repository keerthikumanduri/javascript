// while loop

let index = 1 // remember that index is always the starting value. In any kind of loop we create an index and we define a condition, and we add an increment statement so that the loop can use other values and terminate in the end.
while (index <= 10) {
    console.log(`The values are ${index}`);
    index = index + 2 // We don't have to use i++ all the time we can write something like index + 2.
}

// let myArray = ['hanuman', 'rama', 'lakshmana']
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`values of the array are ${myArray[arr]}`);
//     arr = arr +1
// }

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
index = 0
while (index < myArray.length) {
    console.log(`The values in the array are ${myArray[index]}`);
    index = index + 1
}


// do while loop

// in the do while loop the code is executed first and then the condition is checked. In the example below we defined a variable and did a do while loop. In the do part we said to print the score and increase it. Then in the while part we said said how long we should be doing the loop for. We said to do it until the value is <= 10.
let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

// let score2 = 2 , but what if the variable value is greater than the condition limit value? (i.e , what if our variable value is 7 , which is greater than the limit we defined inside the condition?)
 let score2 = 7 // then it prints score 2 is 7 , since this is a do while loop , the do part is done first and then the condition is checked later.

do {
    console.log(`score 2 is ${score2}`);
    score2++
} while (score2 <=5);