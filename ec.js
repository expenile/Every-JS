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


*/

var n = 2
function square(num){
    var ans = num*num
    return ans
}
square2 = square(n)
square4 = square(4)