const user = {
    username: "Karan",
    price: 1000,

    welcomeMessage: function(){
// console.log(`${this.username} , Welcome To Website`);
// console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);


// function Chai(){
//     let username = "Karan"
//     console.log(this.username);
// }

// Chai()


// const chai = function (){
//     let username = "Karan"
//     console.log(this.username);      

// If this is used outside of any function or object, 
// it refers to the global object. In a web browser, this is usually the window object. 
// However, in strict mode ('use strict';), this remains undefined in the global context.

// }


// const chai = () => {
//     let username = "Karan"
//     console.log(this);
// }
// chai ()


// const addTwo = (num1, num2 ) => {
//     return num1 + num2 
// }

// ----------------------- Implicite Return Methode ------------------- difference between implicite and wxplicite is that we have to call a function and name it 
// const addTwo = (num1, num2 ) => num1 + num2 
// const addTwo = (num1, num2 ) => (num1 + num2)  // Most IMP in React


const addTwo = (num1, num2 ) => ({username: "Karan"})

// console.log(addTwo(2, 5));



