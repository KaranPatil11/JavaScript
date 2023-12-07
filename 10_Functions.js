

// function sayMyName(){
//     console.log("K");
//     console.log("A");
//     console.log("R");
//     console.log("A");
//     console.log("N");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);        // It doesnot returns anything 
// }


function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result                             // Good way but there is one more better 
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage(username = "sam"){
//     if(!username){                      // username === undefined
//         console.log("Please enter a username");
//         return
//     }
//     return`${username} just logged in`
// }


// console.log(loginUserMessage("Karan"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Karan",
    price: 200
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 500
})


const myNewArray = [200, 300, 500, 800]
function returnValue (getArray){
    return getArray[3]
}

// console.log(returnValue(myNewArray));
console.log(returnValue([200, 400, 500, 900]));


