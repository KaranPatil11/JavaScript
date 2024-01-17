const accountId = 14526                               //const is declared so that value in it cannot be changed
let accountEmail = "Karan@gmail.com"
var accountPass = "1245"                         // var was used in old days but due to scope issue it is no more used
accountCity = "Jaipur"                              // Bad way to write the code
let accountState;                                  // when we leave it blank then the compiler provides with the output as undefined

// accountId = 2                                    // not allowed coz const is declared at top

// accountEmail = "jack@gmail.com"
// accountPass = "11111"
// accountCity = "kolhapur"


// accountId = "4444"
console.log(accountId)
console.log(accountEmail);                     // we can directly write log as a shortcut
console.log(accountPass);

console.table([accountId, accountEmail, accountPass, accountCity, accountState]); // we can use it to display the content in tabular format
