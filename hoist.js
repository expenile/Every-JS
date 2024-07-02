/*

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.

- Even before the code gets executed, JS engine allocates memory for all the variables and functions - where variables are stored as undefined and functions are stored as whole

- So the whole hoisting concept is about how JS engine allocates memory for variables and functions before the code is executed 
 */

console.log(x);  // undefined
getName(); // Nilesh
console.log(getName);


var x = 7;

function getName(){
    console.log("Nilesh");
}

console.log(x);  // 7
getName(); // Nilesh

console.log(getName);


console.log(displayName); // undefined- because it will behave as var displayName = undefined

var displayName = () =>{
    console.log("Nilesh");
}

displayName(); // Nilesh
console.log(displayName); // [Function: displayName]


console.log(showName); // undefined - because it will behave as var showName = undefined
var showName = function(){
    console.log("Nilesh");
}

showName(); // Nilesh
console.log(showName); // [Function: showName]




