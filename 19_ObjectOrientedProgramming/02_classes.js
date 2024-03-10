class Vehicle{
    // ==== Class Variable ====
    Category = "onRoad Vehicles"

    constructor(type, name, wheels, seatingCapacity){
        this.type = type
        this.name = name
        this.wheels = wheels
        this.seatingCapacity = seatingCapacity
    }

    display(){
        return `Vehicle details`
    }
}


// ====== OBJECTS || INSTANCES =======
const suzuki_Mehran = new Vehicle('car', 'Suzuki Mehran', 4, 5)
console.log(suzuki_Mehran.Category);
console.log(suzuki_Mehran.display());