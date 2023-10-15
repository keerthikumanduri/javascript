// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element); // we first put a variable inside the for loop, the index <= is the condition after this condition the program moves to line 4 and executes, after the execution the index++ increase the value of the index by one and repeats the process until the condition won't satisfy anymore.
// }

//we can also write if condition inside for loop

// for (let j = 0; j < 10; j++) {
//     const element2 = j;
//     if (element2 == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element2); // like so
// }

for (let i = 1; i <= 10; i++) {  // interesting case. take a look at the output.
    console.log(`Outer loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value is ${j} and outer loop value is ${i}` );  
        console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

// to create a loop from an array

let myArray  = ["Hanuman","Sugriva", "Angada", "Sushena", "Nala", "Panasa" ]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//break and continue

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`found 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`found 5`);
        continue  // continue print our if condition (here it prints found 5) and keeps on going until the loop ends.
    }
    console.log(`value of i is ${index}`);
    
}