// ===== Immediately Invoked Function Expression (IIFE). =====
// --> If we want immediate connection with Database.
// --> Don't want global variable to pollute function scope.

(function dbConnection(){
    console.log(`DB connected.`)
})();                              // also to stop execution use (;) ?

((firstName)=>{
    console.log(firstName)
})("Ali");  


// Don't take any global variables. Actually It take Global Variable.
let myVar = "Ali"
(()=> {
    console.log(myVar)                    //Error.
})()