let a = 300
if(true){
    let a = 10 
    const b = 20
    // console.log("INNER: ", a);

}


// console.log(a);


function one(){
    const username = "Karan"

    function two(){
    const website = "Youtube"
    // console.log(username);
    } 
    // console.log(website);   //wrong line 
    two()
}
one()

if (true) {
    const username = "Karan"
    if (username === "Karan") {
       const website =  " Youtube"
    //    console.log(username + website);
    }
    // console.log(website);  //Wrong code
  
}
// console.log(username);   // wrong code


// +++++++++++++++++++++++++ Intersting +++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
addTwo(5)

