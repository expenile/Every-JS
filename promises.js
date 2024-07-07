// const promise1 = new Promise(function(resolve, reject) {
//     // do an async task 
//     // DB calls, cryptography, etc
//     setTimeout(function(){
//         console.log('Async Task 1');
//         resolve();
//     },1000)
// })


// promise1.then(function(){
//     console.log('Promise1 consumed');
// })


// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Async Task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Promise2 consumed');
// })


// const promise3 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Async Task 3');
//         resolve({username:"Nilesh",email:"nilesh@example.com"});
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);

// })


// const promise4 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if (!error) {
//             resolve({ username: "nilesh", password: "123" });
//         } else {
//             reject('ERROR: Something went wrong');
//         }
//     }, 1000);
// });

// promise4
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error) {
//     console.log(error);
// }).finally(() =>{
//     console.log("the promise is either resolved of rejected");
// })



// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = true;
//         if (!error) {
//             resolve({ username: "js", password: "123" });
//         } else {
//             reject('ERROR: JS went wrong');
//         }
//     }, 1000);
// })


// async function consumePromise5(){
// try {
//     const response  = await promise5
//     console.log(response);
// } catch (error) {
//     console.log(error);
// }
// }

// consumePromise5()



// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data =await  response.json()
//    console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }




// getAllusers()


// fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
//    return response.json()
// })
// .then((data) =>{
//     console.log(data);
// })
// .catch((error) =>{
//     console.log(error);
// })