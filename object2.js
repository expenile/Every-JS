// const tinder = new Object()
const tinder = {}
tinder.id = "123abc"
tinder.name = "Sam"
tinder.isLoggedIn = false
// console.log(tinder);

const user = {
    email:"nilesh.com",
    fullname:{
        userfullname:{
            firstname:"nilesh",
            lastname:"Pal"
        }
    }
}

// console.log(user.fullname.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}

// const obj3 =Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users  =[
    {
        id:1,
        email:"nil@.com"
    },
    {
        id:2,
        email:"nil@.com"
    },
    {
        id:3,
        email:"nil@.com"
    },
]

users[1].email
console.log(tinder);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


console.log(tinder.hasOwnProperty('isLoggedIn'));