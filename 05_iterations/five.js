// for each loop

const coding = ['js', 'py', 'rb', 'c++', 'swift']
coding.forEach( function (item) { // here inside the ( ) we have given an arbitrary name called item. This is actually a parameter. since the loop has to go inside the array this callback function automatically takes the elements of the array as its arguments.

    console.log(item);

} )

// we can do the same with arrow functions as well

coding.forEach( (val)=> {
    console.log(val);
}) // gives the same output.

// we can also pass a function as a parameter inside this for each like follows.

function printme(val) {
    console.log(val);
} 

coding.forEach(printme)

// to find the values of objects inside an array 

let myCoding = [
    {
        langName: 'python',
        langFilename: 'py'
    },
    {
        langName: 'javascript',
        langFilename: 'js'
    },
    {
        langName: 'cpp',
        langFilename: 'C++'
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )