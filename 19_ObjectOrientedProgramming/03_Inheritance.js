class Parent{
    message = "Parent Class"

    constructor(prop1, prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }

    addSum = ()=>{
        return this.prop1 + this.prop2
    }
    static privateDetails = ()=>{
        console.log("Not Accessable");
    }

}

class Child extends Parent{
    constructor(name, age, prop1, prop2){
       super(prop1, prop2)
       this.name = name
       this.age = age
    }
}

// ======== OBJECTS =======
const parent = new Parent("first", "second")
const child = new Child('Hassan', 23, 29, 40)
console.log(child.addSum())
// console.log(parent.privateDetails())   // Error
// console.log(child.privateDetails())   // Error -> notAccessable


console.log(child === Child)                // False.
console.log(child instanceof Child);        // True.