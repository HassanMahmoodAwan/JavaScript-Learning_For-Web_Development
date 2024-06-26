// For OF ==> Array, String and Map for values.

const myArray = new Array(10, 12, 15)

for (const num of myArray) {
    console.log(num)
}

const myStr = "Ali"
for (const char of myStr) {
    console.log(char);
}

// ===== MAP ===== => Key-Values, Unique Keys, not Iteratable.
const myMap = new Map()
myMap.set("a",10)
myMap.set("b", 210)
myMap.set("c", 1210)
myMap.set("a", 15)
console.log(myMap)

for (const keyValueArray of myMap) {
    console.log(keyValueArray)            // Returns Array of key, value.
}

for (const [key, value] of myMap) {
    console.log(`${key} and ${value}`)
}


// Key-Value pair of String   (Not work, index not Given as Ouput)
let test = 'fetch.AI'
for(let [value, index] of test){
    console.log(value + " " + index)
}

// Note : Iterating Object using for-of ==> Error.



// ====== For-IN ====== > Used to get key or Index. Object + Array.
const myLanguages = {
    py: "Python",
    JS: "Javascript",
    TS: "TypeScript",
    RS: "RUST"   
}

for (const key in myLanguages) {
    console.log(`${key} and ${myLanguages[key]}`);
}

for (const index in myArray) {
    console.log(index);
}

for (const index in myStr) {
    console.log(index);
}


// Note: Map cannot iterable using For-In.