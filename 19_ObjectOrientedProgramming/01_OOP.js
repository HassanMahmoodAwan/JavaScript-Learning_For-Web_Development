// Object Literals   => Object have properties and Methods
// ==> this(current-Context), this is like --> self.

const userOne = {
    // Properties
    username: "Hassan",
    age: 23,
    
    // Methods
    display: function(){
        console.log(`${this.username} and ${this.age}`)
    }
}

console.log(this)
console.log(userOne.username)
console.log(userOne.display());


// Note: === what if to create muiliple users. === use constructor Func.
// to save value in currentContext we use this. in function.


function users(username, password, isLoggedIn){
    this.username = username
    this.password = password
    this.isLoggedIn = isLoggedIn

    // Constructor can also hold method.
    this.logMessage = ()=>(`${this.username} you are logged in`)

    return this     //-> Optional
}

const UserOne = users("Hassan", "123", true)
const UserTwo = users("Hamid", "321", true) //->overwrite constru context.
console.log(UserOne);

// Use new as create separate Instance for each Object.
const userThree = new users("Ali", "456", false)
const userFour = new users("Umer", "765", false)
console.log(userThree);


// ==== Constructor Function using Arrow Func (not allowed as this Conext:: {}) ====
const allUsers = (userId, userName) => {
    this.Id = userId
    this.name = userName

    this.display = ()=> console.log(this.name)
}
const regularUser = allUsers(21, 'Ali')
// regularUser.display()                // Error
// console.log(regularUser.userName)    // Error
