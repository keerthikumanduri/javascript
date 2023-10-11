// iife - Immediately invoked function expressions - meaning we execute the function right away. why? Because sometimes global scope pollution happens and to get rid of this issues we use iife.
// For example, if you have a variable with the same name in both the global scope and an IIFE, the IIFE's variable will not affect the global variable:

var x = 10;

(function() {
    var x = 20; // This 'x' variable is scoped to the IIFE
    console.log(x); // Logs 20
})();

console.log(x); // Logs 10, the global 'x' remains unaffected


// above code is gpt.

(function chai(){  // this is called named iife
    console.log('DB CONNECTED');
})();  // way to write iife. make sure to always use ; because iife doesnt know where to end.

((name) => { // this is called unnamed iife.
    console.log(`DB CONNECTED2 ${name}`);
})("keerthi"); // here we passesd an argument and the function took it as a parameter and passed it into the function for execution. same function stuff.