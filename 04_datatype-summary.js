// # Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.34

const name = "Karan"
const isLoggedIn = false 
const outSideTemp  = null
let city;
// console.log(city); 


// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId);

// const bigNumber =  511513n
// console.log(typeof bigNumber);


// # Reference (Non Primitive)

// : Array, Objects, Function

// const heros = ["Karan", "Jack", "Superman"];

// let myObj = {
//     name: "Karan",
//     age: 21,
// }
// console.log(myObj + name);
// console.log(typeof name);

// const myFunction = function() {
//      console.log("Hello World");
// }

//----------------------------------------------------------------------

// Stack => (Primitive), Heap => (Non-Primitive)

// let myMainName = "Karan Patil"

// let anotherName = myMainName
// anotherName = "Jack Hope"

// console.log(myMainName);
// console.log(anotherName);

let userOne = {
    email: "karan@gmail.com",
    age: 21
}
let userTwo = userOne

userTwo.email = "jack@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);