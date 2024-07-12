const myArr = [0,1,2,3,4,5] // , true, "nilesh"

const myhero = ["nilesh", "kishan"]

const myArr2 = new Array(1,3,34,21,23)

//arrays are resizable
// console.log(myArr[0]);


//methods

// myArr.push(89)

// myArr.push(7)
// myArr.pop()

// myArr.unshift(12) //add values at hte front 
// myArr.shift() // removes value from the front

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);


//slice and splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);

// console.log(myn2);



const marvelHero = ["thor", "im", "sm"]
const dc = ["sm", "bm", "flash"]

// marvelHero.push(dc)
// console.log(marvelHero);

// const allhero = marvelHero.concat(dc)
// console.log(allhero);

// const allhero = [...marvelHero, ...dc]
// console.log(allhero);

// const aa = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
// const real = aa.flat(Infinity)
// console.log(real);

console.log(Array.isArray("Nilesh")
);
console.log(Array.from("Nilesh")
);

console.log(Array.isArray({name:"nilesh"})
); //interesting


let s1 = 100
let s2 = 200
let s3 =300
console.log(Array.of(s1,s2,s3));

