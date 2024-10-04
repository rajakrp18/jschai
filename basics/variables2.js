// Type Conversions

let score = 33
console.log(typeof score); //date-type is number in both 
console.log(typeof (score));

let score1 = "33"
console.log(typeof score1); //date-type is number in string 
console.log(typeof (score1));

let score2 = "33"
let valueInNumber = Number(score2) //used to convert any datatype to number
console.log(valueInNumber)
console.log(typeof (valueInNumber))


let score3 = "33abc"
let valueInNumber1 = Number(score3) //used to convert any datatype to number
console.log(valueInNumber1) //value is NaN
console.log(typeof (valueInNumber1)) //but conversion is successfull

let score4 = "null" //null as a string
let valueInNumber2 = Number(score4) //used to convert any datatype to number
console.log(valueInNumber2) //value is null is also coming NaN
console.log(typeof (valueInNumber2)) //but conversion is successfull

let score5 = null
let valueInNumber3 = Number(score5) //used to convert any datatype to number
console.log(valueInNumber3) //value is null is 0
console.log(typeof (valueInNumber3)) //but conversion is successfull

let score6 = undefined
let valueInNumber4 = Number(score6) //used to convert any datatype to number
console.log(valueInNumber4) //value is undefined is NaN
console.log(typeof (valueInNumber4)) //but conversion is successfull

let score7 = true
let valueInNumber5 = Number(score7) //used to convert any datatype to number
console.log(valueInNumber5) //value is true is 1
console.log(typeof (valueInNumber5)) //but conversion is successfull

let score8 = false
let valueInNumber6 = Number(score8) //used to convert any datatype to number
console.log(valueInNumber6) //value is false is 0
console.log(typeof (valueInNumber6)) //but conversion is successfull

// Notes
// 33 ==> 33
// "33" ==> NaN(Not a Number)
// true=> 1, false=> 0

let isLoggedIn = 1
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn)

// let isLoggedIn1 = ""
// let booleanisloggedIn1 = Boolean(isloggedIn1)
// console.log(isloggedIn1)

// let isLoggedIn2 = "Raj"
// let booleanisloggedIn2 = Boolean(isloggedIn2)
// console.log(isloggedIn2)

// 1  => true, -=> false
// "" => false
// "Raj"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
