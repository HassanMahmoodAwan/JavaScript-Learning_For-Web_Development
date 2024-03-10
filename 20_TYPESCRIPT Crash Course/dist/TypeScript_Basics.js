"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hero;
function getHero() { return "Ayubi"; }
hero = getHero();
hero = 9;
hero = "hello";
let qty = 123435453;
let course = "Hassan";
let other;
other = 10;
other = "unknown";
function useFunc(doc) {
    console.log(doc);
}
let newArr = [1, 2, 3, "str"];
let courses = ["JS", "TS", "TailwindCSS", "ReactJS"];
let Numbers = [];
let arr = [];
let userDetail = [1, "Hassan"];
userDetail.push(1);
var size;
(function (size) {
    size[size["small"] = 4.8] = "small";
    size[size["medium"] = 5.7] = "medium";
    size[size["large"] = 6.4] = "large";
})(size || (size = {}));
const mySize = size.medium;
console.log(mySize);
function useCalTax(year, income) {
    if (year == 2022 && (income || 20000) > 50000)
        return (income || 20000) * 1.3;
    return (income || 20000) * 1.1;
}
useCalTax(2022);
let Employee = {
    id: 1,
    name: '',
    retire: (Date) => console.log(Date)
};
Employee.name = "Hassan";
let otherEmployee = {
    id: 1,
    name: "ALI",
    retire: (date = new Date) => (console.log(date))
};
otherEmployee.retire(new Date);
let kgToLbs = (weight) => {
    if (typeof weight === 'number')
        return weight * 1.2;
    else
        return parseInt(weight) * 1.2;
};
kgToLbs(10);
kgToLbs('22kg');
let myfeature = {
    drag: () => { },
    resize: () => { }
};
let allowedAge = 24;
function greet(msg) {
    if (msg)
        console.log(msg);
    else
        console.log("null or undefined");
}
greet(undefined);
function useAddNos(no1, no2, option = false) {
    return no1 + no2;
}
let noSum = useAddNos(4, 5);
const usehandleError = (errorMsg) => {
    throw new Error(errorMsg);
};
function useCheckConnection(serverMsg) {
    if (serverMsg == "Establish")
        return true;
    return "status 201";
}
const connectionStatus = useCheckConnection("request Send");
