// Every (Constant, Variable, Array, Function, Object) are Object in JS.

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

// Not ChangeAble
Object.defineProperty(Math, "PI", {
    writable: true
})
descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)


const chai = new Object({
    name: "ginger chai",
    price: 250, 
    serve: "Cup",

    method: function(){
        return
    }
})

Object.defineProperty(chai, "name", {
    writable: true,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function')
        console.log(`${key}: ${value}`);
}

