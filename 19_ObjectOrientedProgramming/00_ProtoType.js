// Note: Function Func be ha or Object be ha.

/**
    Prototype Hirarichey: 
        - Object
        - (Array, String, Function)
 */

function multiBy5(no){
    return no * 5
}
console.log(multiBy5(5))

multiBy5.power = 10
console.log(multiBy5.power)       // Shows Func is Obj
console.log(multiBy5.prototype)   // ==> {} This.


function user(name, score){
    this.name = name
    this.score = score
}
const userOne = new user("Hassan", 72)
console.log(user.prototype)                 // {}

user.prototype.increment = function(){
    this.score += 1
}
user.prototype.printMe = function(){
    console.log(`${this.score}`)
}
const userTwo = new user("Ali", 70)
userTwo.printMe()







const Languages = {
    JS: "JavaScript",
    RS: "RUST",
    codeMessage : function(){ console.log(this.JS + "  " + this.RS) }
}
Languages.codeMessage()

Object.prototype.topLevelMsg = function(){
    console.log("Access by All");
}
Object.prototype.trueLength = function(param){
    return param.trim().length
}
const message = "Attitude towards Coding         "
console.log("True Length: " + Object.trueLength(message))

String.prototype.trimLength = function(){
    console.log(this)
    return this.trim().length
}
console.log("Trim Length: " + "Hitesh   ".trimLength())


myArr = [1,2,3]
myArr.topLevelMsg()

Array.prototype.arrayLevelMsg = "Only Array can Access"
console.log(myArr.arrayLevelMsg);




//  ========== ProtoType Inheritance =============
const user = {
    name: "Hassan",
    score: 72,
}
const lisences = {
    car: true,
    bike: true
}
const student = {
    field: "BSCS",
    interest: "Web Development",

    __proto__: user
}
Object.setPrototypeOf(student, lisences)