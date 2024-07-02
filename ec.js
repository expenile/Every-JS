/*

Everything in JS happens inside the execution context

it has two components - memory (where all functions are stored as key value pairs and these are also called variable environment )

2nd component = code execution (where all the code is executed line by line) => also called as thread of execution

JavaScript is a synchronous single-threaded language


Execution Context has two phases:
1. Creation Phase
2. Execution Phase
- In creation phase, memory is set up for all the variables and functions 
- In execution phase, code is executed line by line

- In EC functions are stored as whole and variables are stored as undefined in the memory
- return statement returns the control to the calling function
- EC is deleted from the stack once the function is executed
- JS is a garbage collected language
- As soon as the JS program runs a global execution context is created 


Call Stack: 
- Call Stack is a data structure in JS which is used to keep track of the execution context(maintains the order of execution of functions)
- It follows the LIFO principle (Last In First Out)
- In callstack at the bottom of stack we have the global execution context
- In callstack at the top of stack we have the current execution context
- current execution context is deleted from the stack once the function is executed




*/

var n = 2
function square(num){
    var ans = num*num
    return ans
}
square2 = square(n)
square4 = square(4)