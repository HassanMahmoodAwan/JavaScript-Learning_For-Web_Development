// Arrays

const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.__proto__)
const multiArr = ["Hassan", "Awan", true, 23]
console.log(arr , typeof arr)

const  arr1 = new Array(1,2,3,4,5)
const arr2 = new Array(10)              // Size Array.
console.log(arr1, typeof arr1)

// ====== Methods ======

arr.push(7)
arr.pop()
console.log(arr, arr.length)

// --> Unshift and Shift :: Not use as very Expensive. Guess?
arr.unshift(9)
arr.shift()
console.log(arr)

console.log(arr.includes(18))   // false
console.log(arr.indexOf(18))   //  -1

// Slice and splice
console.log(arr.slice(1, 3))        // Does not Effect array.
console.log(arr.splice(1, 3))       // Change the Array
console.log(arr)


console.log(arr.join())




