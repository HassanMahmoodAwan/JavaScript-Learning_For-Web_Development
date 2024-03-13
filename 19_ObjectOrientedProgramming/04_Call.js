/**
        CALL: used to Call 1 construct func properties to Other.
 */

function Vehicle(){
    this.category = "onRoad"
    this.type = "City use"
}

function Car(model){
    Vehicle.call(this)
    this.model = model

    this.display = function(){
        console.log(`${this.category} is ${this.model}`);
    }
}

const one = new Car("Honda", "Bike")
console.log(one.category)
one.display()