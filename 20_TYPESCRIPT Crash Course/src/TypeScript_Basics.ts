let hero;                   // any, exempt type strictness

function getHero(){ return "Ayubi" }

hero = getHero()            // Still any, but we put string.
hero = 9                    // any
hero = "hello"

let qty: number = 123_43_5453
let course = "Hassan";

//  === Note: when using Func, need to mention Type.
function useFunc(doc: any){ console.log(doc) }


// ==== Arrays ====
let newArr = [1,2,3, "str"]    // (string | number)[]
let courses: string[] = ["JS", "TS", "TailwindCSS", "ReactJS"]
let Numbers = []                // any
let arr: number[] = []


// ====Tuples====
// --> [Key, value]
let userDetail: [number, string] = [1, "Hassan"]
userDetail.push(1)                 // Allowed, gap in TS.

// ====Enum====
// group of Constants, same as Java.
enum size {small = 4.8, medium = 5.7, large=6.4}
const enum allSizes {small = 4, medium, large}  // Less code in JS FILE.

const mySize: size = size.medium
console.log(mySize)

// ====Functions ====
function useCalTax(year:number, income?: number | null): number|void {
    if (year == 2022 && (income || 20_000) > 50_000)
        return (income || 20_000) * 1.3
    return (income ||20_000) * 1.1
}
useCalTax(2022, null)


// ==== Objects ====
let Employee: {
    readonly id:number, name:string, status?:number,
    retire?: (date: Date)=> void } = 
    {
     id: 1,
    name: '',                
    retire: (Date)=> console.log(Date)
    }
Employee.name = "Hassan"
// otherEmployee.status = 200         // No Error, without It.


// ==== TypeAliases =====
type otherEmployee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let otherEmployee: otherEmployee = {
    id: 1,
    name: "ALI",
    retire: (date = new Date) => (console.log(date.getTime()))
}
otherEmployee.retire(new Date())


// ==== Union ====
let kgToLbs = (weight: number | string ):number =>{
    // Narrowing
    if (typeof weight === 'number')
        return weight * 1.2
    else 
        return parseInt(weight) * 1.2
}
kgToLbs(10)
kgToLbs('22kg')


// ==== Type Intesection ====  Note: Both at same time.
type dragable = {
    drag: ()=> void
}
type resizeable = {
    resize: ()=> void
}
type UIFeature = dragable & resizeable

let myfeature: UIFeature = {
    drag: ()=>{},
    resize: ()=> {}
}


//  ======= Literals ======   :: Limit the value.
type age = 23 | 24 | 25
let allowedAge: age = 24

type metrics = 'cm' | 'inch' | 22

// ===== Functions =====
function greet(msg: string | null | undefined): void{
    if (msg)
        console.log(msg);
    else
        console.log("null or undefined");     
}
greet(undefined)

function useAddNos(no1: number, no2:number, option:boolean = false): number{
    return no1+ no2
}
let noSum = useAddNos(4,5)  

const usehandleError = (errorMsg: string): never => {
    throw new Error(errorMsg)
}

function useCheckConnection (serverMsg: string): string | boolean{
    if (serverMsg == "Establish") 
        return true
    return "status 201"
}
const connectionStatus = useCheckConnection("request Send")





export {}