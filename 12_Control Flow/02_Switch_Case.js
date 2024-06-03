// if no use of Break, All cases run with Default as well.
// Default is not Mandatory.

const age = 23

switch (age){
    case 15:
    case 17:
        console.log("Age is 15 or 17.")
        break
    
    case 18:
        console.log("Age is 18.")

    case 23:
        console.log("Age is 23.")
        
    default:
        console.log("Unknown Age value")
}