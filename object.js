/*



*/

//sinlgeton 
// whenever we make objects as literal then singleton wont get created 
// but whenever we make object as constructor then we can get singleton
// Object.create


//object literal

const mySym =Symbol("key1")

const user  = {
    name:"Nilesh",
    "full name":"Nilesh Pal",
    [mySym]:"mk1",
    age :21,
    location: "NSP",
    email:"nilesh@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user["isLoggedIn"]);  
// console.log(user[mySym]);

// user.email = "kishan@chatgpt.com"
// // Object.freeze(user)
// user.email = "nilpa@example.com"
// console.log(user);

user.greetings = function(){
    console.log("Greetings");
}
console.log(user.greetings);
console.log(user.greetings());
user.greetings2 = function(){
    console.log(`Hello, ${this.name}` );
}
console.log(user.greetings2);
console.log(user.greetings2());
