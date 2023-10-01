let myDate = new Date()
console.log(myDate); // when this part of code is run we get some random numbers which are hard to comphrehend. lets try to change it to a string in the following step.(op - 2023-10-01T13:54:35.585Z)
console.log(myDate.toString());// this now give a readable output (op - Sun Oct 01 2023 19:26:31 GMT+0530 (India Standard Time)). there are more methods available which are similar to .toString() , some of them are discussed below.
console.log(myDate.toDateString()); // op - (Sun Oct 01 2023)
console.log(myDate.toISOString()); // op - (2023-10-01T14:00:42.228Z)
console.log(myDate.toJSON()); // op - (2023-10-01T14:00:42.228Z)
console.log(myDate.toLocaleDateString()); // op - (10/1/2023)
console.log(myDate.toLocaleString()); // op - (10/1/2023, 7:30:42 PM)

 //let newDate = new Date(2023, 1, 15)
 //console.log(newDate.toDateString()); // here we have specified certain parameters inside the Date in line 10. when we run console it doesn't make any sense so we use .toDateString() for a better output. op - (Wed Feb 15 2023). Although we have given 1 we got a month of february this is because of the 0 index. 0 is jan and so on.

//let newDate = new Date(2023, 1, 15, 6, 5) //more values can also be added inside Date which are then converted to min:sec and so on.
//console.log(newDate.toLocaleString());

// we can also declare a date in dd-mm-yy format

let newDate = new Date("02-09-2000")
console.log(newDate.toLocaleString());

// timestamps - 

let MyTimeStamp = Date.now()
console.log(MyTimeStamp);// op - 1696170176306 in millisec
console.log(newDate.getTime()); // op - 950034600000 in ms // now we can easily compare this.

// to get time in seconds we divide Date.now and divide it by 1000. and pass it in math.floor to round down.
console.log(Math.floor(Date.now()/1000)); 


// customisation

newDate.toLocaleString('default', {
   weekday: "long" 
})