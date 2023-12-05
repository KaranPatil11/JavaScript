// singleton
// When object is crated with constructor it create singleton 
// when object is created with literal it is not a singletone

//Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Karan",
    "full name": "Karan Patil",
    [mySym]: "mykey1",
    age: 21,
    location: "Kolhapur",
    email: "jackhope200@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "karanpatil@gmail.com"
// Object.freeze(JsUser)


JsUser.email = "karanpatil@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
     
    console.log("Hello JS users");
}
JsUser.greetingTwo = function() {
     
    console.log(`Hello JS users, ${this["name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


