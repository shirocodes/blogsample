let myName = "Joseph Mbugua"
// let allows us to reassign values to our variables 
// to print output to our consoles. we can alwaconsole.log(myNumber)ys use the js method 
// console.log()
console.log(myName)
myName = "Pauline"
// console.log(myName)
// const as a keyword : immutable 
const myNumber = 10
console.log(myName)
// myNumber = 20
console.log("I am telling it directly")
console.log(myName, myNumber)

let strings_variable = "10" // a string is a sequence of characters or anything
// in quotations 
// 2. Number data type : int, floats(doubles)
let integers_variable = 10
let float_variables = 10.00  
// 3. Booleans data type : true or false 
let boolean_variable = true
// 4. Functions 
let function_variable = function () {
     return "Joseph Mbugua"
}
// 5. Arrays : a collection of items (items can be of the same data type or different data types)
let array_variable = ["string",10,10.00,true]
array_variable = ["joseph","larry"]
// 6. Objects : collection of key and value pairs 
let object_variable  = { name: "value" }

let userName = "Joseph"
let userRole = "IT Lecturer"
let userEmail = "joseph@moringaschool.com"
let userId = 2394

let user = {
    username: "Joseph",
    userRole: "IT Lecturer",
    userEmail : "joseph@moringaschool.com",
    userID:  2394
}

console.log(user.username)
console.log("The user name is " + user.username + " the user role " + user.userRole)
console.log(`The username is ${user.username} the user role is ${user.userRole}`)
// 7. Undefined : this is the data type returned when a variable is declared but not 
// initialized (assigned a value)
let x 
console.log(x)
// 8. null : represents an empty or non-existent value 
let y = null
console.log(y)

// TYPE CHECKING : checking the data type of a variable 
//typeof 
console.log(typeof myName)

const fact = "Spinach is "; // fact is of type `String`
const tail = " years old"; // tail is of type `String`
const age = 5; // age is of type `Number`
const num1 = "10"

console.log(fact + age.toString() + tail); //=> "Spinach is 5 years old"
console.log(age + parseInt(num1))