"use strict";   // for Newer version JS

// alert("Hello World!"); // Not in Node JS, but for Browser.


let age = 23
let firstName = "John"
let flag = true


/*
-> Primitive DataTypes:
    1- Numeric
    2- String
    3- Boolean
    4- Undefined    -> Nothing
    5- null         -> Intentionally No value;
    6- Symbol       -> Unique.

-> Non-Primitive DataTypes:
    1- Array
    2- Objects
*/

console.table([typeof age, typeof firstName, typeof flag, typeof null, 
    typeof undefined, typeof Symbol])
