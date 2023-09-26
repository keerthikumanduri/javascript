 const accountId = 414366
 let accountEmail = "JaiHanuman@google.com"
 var accountPassword = "23456"
 accountCity = "Hyderabad"
 let accountState; 
// accountId = 232323
 console.log(accountId);

 accountEmail = "kv@gmail.com"
 accountPassword = "2123123"
 accountCity = "Bengaluru"

 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//NOTES:

/* 
1. A constant is declared by using the 'const' and assigning it a value. A constant always has a single value.

2. There are 2 ways to declare a variable they are i) 'let' ii) 'var' we now use 'let' only to declare a variable because 'var' has block and functional scope related issues.

3.In the fifth line the variable 'account state' has been declared but has not been assigned any value, but still js can reserve some memory for undefined variable as well. 

console.log("") - this prints what is inside of the parentheses.

console.table([]) - this creates a table and prints all values at once.
*/

