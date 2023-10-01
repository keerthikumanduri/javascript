 const name = "Rama"
 const quiverCount = " 2"
 console.log(name + quiverCount + " Value"); // this is an old approach to concatenate strings

 //string interpolation method.`${}`

 console.log(`Hello my name is ${name} and my quiver count is ${quiverCount}`);

const gameName = new String("Ramayana")// This is another way to define a string but when the typeof for this code is run it give us OBJECT. because the original  primitive string is wrapped inside the object string.

console.log(gameName[0]) // this syntax allows us to access a particular element inside a string.

console.log(gameName.__proto__); // this syntax allows us to use some string methods for example there is a string method called .touppercase which converts the string to upper case.

console.log(gameName.toUpperCase());//example for the above code. // few more similar methods are below.
console.log(gameName.charAt(4));// .charAt() is a method to find what letter is present at a certain index.
console.log(gameName.indexOf('a')); // .indexOf() is a method to find what the position of a ceratin character is. This only prints the first occurence of the character.

const newString = gameName.substring(0, 4)
console.log(newString);// here .substring() is user to print a certain portion of a string by specifying what characters we want, here the end number 4 is exclusive.

const anotherString = gameName.slice(-8, 2)
console.log(anotherString); // this will print ra. slice can take negative values but substring cannot.

const newStringone = "    Rama   "
console.log(newStringone);  
console.log(newStringone.trim());// the trim() methods removes extra space from both sides of the text.  

const url = "https://keerthivardhan.com%20"
console.log(url.replace("%20", "."));// the .replace() method replaces a character with another char that you specify. here we replaces %20 with "." .

console.log(url.includes("keerthivardhan"));// .includes() method tells us if there is a ceratin word in the string that we have defined.

const javaScript = "I-am-learning-javaScript"
console.log(javaScript.split('-', 1));// .split() method divides a string into substrings and returns them in a form of an array. we need to specify the kind of seperator and limit.

