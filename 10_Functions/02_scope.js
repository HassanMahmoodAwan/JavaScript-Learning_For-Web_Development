//  ===== Block Scope ======

let a = 100
const b = 200
var c = 300         // var global scope, no block scope.

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

console.log(a)
console.log(b)
console.log(c)



//  ===== Function Scope ====== --> Closure Scope.

function channel(){
    const name = 'DeepMind Algo'

    platform()                      // Func Call : Hoisting.
    function platform(){
        const website = "Youtube" 
        var type = "Technology" 
        console.log(`${name} and ${website}`)
    }
    // console.log(website)    // Error.
    // console.log(type)       // Error.
}
channel()


// ======= Function Hoisting. =======

one()
function one(){
    console.log("Hello world!")
}

// two()                       // --> Error.
const two = function(){
    console.log("Hello world!")
}
two()

// third()                      // --> Error.
var third = function(){
    console.log("Hello world!")
}
third()


var fourth
fourth()
fourth = function(){
    console.log("Hello world!")
}  // Check the Results.