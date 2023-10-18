const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num)=> { return num +10}) // if there is scope we always have to use return , if not we can do (num)=> num+10.
// console.log(newNums);

const val = myNumbers.forEach( (num)=> { // the above method can also be done with for each.
    console.log(num + 10);
})
console.log(val);

//chaining

const newNums = myNumbers
                .map((num) => num * 10) // prints 10, 20 , 30,...
                .map((num) => num + 1) // prints 11, 21, 31, 41,...
                .filter((num)=> num >=40 ) // prints values greater >= 40
console.log(newNums);                  // this is called chaining we have used map twice.