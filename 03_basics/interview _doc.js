/*
JS EXECUTION CONTEXT - HOW DOES JS RUN/EXECURE JS FILES?
When we write our js code the first thing that happens is the formation of global execution context(GEC), This GEC is referred by the "this" variable. keep in mind that browser and nodejs has different execution contexts.
below are few more EC'S:
Function execution context
Eval execution context

The execution of js happens in 2 phases 
1.Memory creation phase/ creation phase - space is allocated for all the variables and stuff in our code for execution.*/
// example:

let val1 = 5
let val2 = 55
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(55, 65)

/* lets understand how memory allocation happens
First global execution is run and is located in "this".
In the memory phase the val1's value is stored as undefined.
In the memory phase the val2's value is stored as undefined.
In the memory phase the addNum value stores the functions definition.
In the memory phase the result1 value is stored as undefined.
In the memory phase the result2 value is stored as undefined.
*/

// 2.Execution phase
/* 
In this phase the val1 and val2 are given the values 5 and 55
but whenever a function is about to be executed a new execution context is created for that function in which there are new variable environment and execution thread , after the execution in this new execution context the return value is sent to the global execution context and the temporary context is deleted.


CALL STACK - FOLLOWS LIFO - LAST IN FIRST OUT.


*/
