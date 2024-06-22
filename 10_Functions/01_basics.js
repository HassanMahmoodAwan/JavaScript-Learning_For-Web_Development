function logMessage(username){
    return `${username} has successfully logged!`
}
console.log(logMessage())             // Undefined 
const result = logMessage("Hassan")
console.log(`Result: ${result}`)


function loginMessage(userName = 'No Username'){
    if (userName === undefined || !userName){
        console.log("No UserName Registered")
        return
    }
    return `${userName} has successfully logged in!`
}
const ourResult = loginMessage(userName = "Hassan")
console.log(`New Result: ${ourResult}`)


// Rest Operator same as Spread Operator.
const userCart = function (...prices){     //having unknown Nos parameters. 
    return prices                          //Returns Array
}
userCart(10, 20, 30, 32)







