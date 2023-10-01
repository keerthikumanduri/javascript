const score = 400 // general way to define a number. here js automatically treats 400 as a number.
console.log(score);

const balance = new Number(555)
console.log(balance);// here we explicity stated that we need a number, but its type is now an object.

console.log(balance.toString().length);// here we have converted the number to string , also notice the .length() which is a string method . once we have converted the number to string all the methods of string applies to this now, Hence we are able to find the length of the value.

console.log(balance.toFixed(3)); // the toFixed() method give the number of digits to be printed after the decimal point for the purposes of accuracy. This prints 555.000

const otherNumber = 123.6647 
console.log(otherNumber.toPrecision(3)); // The .toPrecision() method round off precisely to the amount you specify in the parenthesis.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// the .toLocaleString() method gives us the number with individual place values. we can also change the regional place values. here we have set it according to indian system.

 // ***************************** Maths ************************

  // if we do console.log(Math) in the browsers console we get different properties and method for the inbuilt math library in js.

  console.log(Math.abs(-5)); // .abs() is the absolute value property , this converts -ve values into positives, In other words it gives the absolute value.

  console.log(Math.round(5.6)); // .round() rounds the value to the nearest number.
  console.log(Math.ceil(5.6));  // .ceil() rounds up.
  console.log(Math.floor(5.6));  // .floor() rounds down.
  console.log(Math.min(5, 6, 99));  // .min() prints min value.
  console.log(Math.max(5, 6, 493));  // .max() prints max value.

  console.log(Math.random()); // .random() always gives a random value between 0 and 1.

  console.log((Math.random()*10) + 1); //this piece of code moves the decimal to the right giving us values in 10's place. we have added 1 because we want to avoid getting a zero.

  console.log(Math.floor((Math.random()*10) + 1)); // ((Math.random()*10) + 1) - this code will give us a ten's digit and a non zero digit, we have used math.floor() to round down.

  // now lets define some limits 
   const min = 20
   const max = 30

   console.log(Math.floor(Math.random()*(max - min + 1)) + min) 

// lets analyze the above code. inside the console there is
//     " (Math.floor(Math.random()*(max - min + 1)) + min) "
// 1. here math.random() - picks a random number between 0 and 1.
// 2. we multiply that by our difference in range and we add 1 to that to get a non zero value.
// 3. we put Math.random()*(max - min + 1) inside math.floor to round down.
// 4. we add "min" at last because we need the numbers between 20 and 30.
 



  


 

 