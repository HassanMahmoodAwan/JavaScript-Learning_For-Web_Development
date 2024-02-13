const userWebsite = "HassanAwan.ai"

if (userWebsite) console.log(userWebsite)       // It works

// Falsy Values:
// => 0, -0, NaN, undefined, null, "", false, bigInt 0n

// Truthy Values:
// => "0", "false", 1, -1, " ", [], {}, function(){}, "abc..."


// how to find Empty Array:
const myArr = new Array()

if(myArr.length === 0){
    console.log("Array is Empty.")
}

// How to find Object is empty:
const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("Object is Empty.")
}


// ===== Nullish Coalescing Operators (??) -> Null, Undefined =====
let var1;

var1 = 4 ?? 19
console.log(var1)                   // 4

var1 = null ?? 19
console.log(var1)                   // 19

var1 = undefined ?? 19              // 19
console.log(var1)


// Ternary Operators:
var1 >= 4 ? console.log(true) : console.log(false)