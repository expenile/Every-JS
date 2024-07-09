"use strict" // treat all JS code as newer version

// console.log(3+3);
// console.log("3"+3);
// console.log(3+"3");
// console.log("3+3");


// number  => 2 to power 53
//bigint

// string

//boolean
//null => stand alone value

//undefined
//symbol-> uniqueness 



//object
// console.log(typeof undefined); // undefined


// console.log(typeof null);  //object

//undefined is a type od datatype but null is a object


/*
datatype conversion


*/

// let score  = "33abc";
// console.log(typeof score);// string
// console.log(typeof (score)); // string 


// let valueinNumebr = Number(score)
// console.log(typeof valueinNumebr); //number
// console.log(valueinNumebr); // NaN



// let score = null;
// console.log(typeof score); // object
//  let valueinNumebr = Number(score) 
//  console.log(typeof valueinNumebr);  //number
//  console.log(valueinNumebr);  // 0

// let score = undefined;
// console.log(typeof score);  // undefined
//  let valueinNumebr = Number(score)
//  console.log(typeof valueinNumebr); // number
//  console.log(valueinNumebr); // NaN


// let score = true;
// console.log(typeof score);  // boolean
//  let valueinNumebr = Number(score)
//  console.log(typeof valueinNumebr); // number
//  console.log(valueinNumebr); // 1

 // whenever a string cannot be converted to a number it will rrtuen NaN


 /*
 
 "33" => 33
 "33abc" => NaN
 true => 1; false => 0
 
 1 => true
 0 => false
 "" => false
 "nilesh" => true
 */

 


//  let isLoggedIn =1
//  let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); // true

// let isLoggedIn =""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false


// let isLoggedIn ="nilesh"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true



let number = 33
console.log(typeof number);
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

