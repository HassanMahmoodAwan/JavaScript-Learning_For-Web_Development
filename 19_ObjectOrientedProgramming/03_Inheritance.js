class Parent{
    message = "Parent Class"

    constructor(prop1, prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }

    addSum = ()=>{
        return this.prop1 + this.prop2
    }
}

class Child extends Parent{
    constructor(name, age, prop1, prop2){
       super.constructor(prop1, prop2)
    //    super.prop2 = prop2
       this.name = name
       this.age = age
    }
}

// ======== OBJECTS =======
const child = new Child('Hassan', 23, 29, 40)
console.log(child.addSum())
