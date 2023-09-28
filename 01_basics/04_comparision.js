console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1); // the symbol means equal.
console.log(2 != 1); // the symbol means not equals.
// when we exexute the above type of code the always is always in boolean type which is either true or false.

console.log("2" > 1);
console.log("02" > 1);// here javascript automatically converts the string to a number(since 2 and 02 are inside the "" they are considered strings). therefore when the code is run we get True.But the problem is when we compare 2 different datatypes we wont always get a predictable results.


console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);
// comparision like above 3 are really unpredictable. here the conversions sometimes convert to NaN sometimes to 0 

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
// Undefined case is the same as null.

//IN MOST CASES WE ALWAYS AVOID CASES LIKE COMPARING DIFFERENT DATATYPES, CLEAN CODE ALWAYS MATTERS.