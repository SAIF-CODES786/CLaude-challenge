// console.log("Hello, World!"); 
// console.log(10 + 20);  
// let pencil = 5;
// let pen = 10;
// console.log("the total price is :", pencil + pen, "rupees.");
// console.log("the total price is :"+ (pencil + pen) + " rupees.");
// let output = `The total price is ${pencil + pen} rupees.`; // template literals (back ticks)
// console.log(output);
// Arithmetic Operators: +, -, *, /, %, ++, --
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: &&, ||, !
// Assignment Operators: =, +=, -=, *=, /=, %=
// Ternary Operator: condition ? expression1 : expression2
let a = 10;
let b = 20;
console.log(a+b); // Output: 30
console.log(a-b); // Output: -10
console.log(a*b); // Output: 200
console.log(a/b); // Output: 0.5
console.log(a%b);   // Output: 10
console.log(a**b)
a++; // a is now 11
console.log(a); // Output: 11
++a; // a is now 12
console.log(a); // Output: 12
--b; // b is now 19
console.log(b); // Output: 19
b--; // b is now 19
console.log(b); // Output: 19
console.log(a == b); // Output: false
console.log(a === b); // Output: false
console.log(a != b);   // Output: true
console.log(a !== b); // Output: true
console.log(a > b); // Output: false      
console.log(a < b); // Output: true
console.log(a >= b); // Output: false
console.log(a <= b); // Output: true
console.log(a > 5 && b < 30); // Output: true
console.log(a > 15 || b < 25); // Output: true
console.log(!(a > 5)); // Output: false
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.



// conditional statements - if, else if, else, switch
console.log("before my if statement");
let agee = 20;
if (agee >= 18) {
    console.log("You are an adult.");
    let a  = 10;
    console.log(a);
}
if (agee < 18) {
    console.log("You are a minor.");
}
console.log("after my if statement");

let firsstName = "John"; 
if (firsstName === "John") {
    console.log(`Hello, ${firsstName}!`); // Output: Hello, John!
}

let color = "red";
// traffic light example
if(color==="red"){
    console.log("Stop");
}
if(color==="yellow"){
    console.log("Get Ready");
}
if(color==="green"){
    console.log("Go");
}



//else if example
let day = "Monday"; 
if (day === "Monday") {
    console.log("Today is Monday.");
}   
else if (day === "Tuesday") {
    console.log("Today is Tuesday.");
}   
else if (day === "Wednesday") {
    console.log("Today is Wednesday.");
} 

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
}   
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}


// else example
let number = 5;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}

let colorr = "blue";
if(colorr==="red"){
    console.log("Stop");
}   
else if(colorr==="yellow"){
    console.log("Get Ready");
}
else if(colorr==="green"){
    console.log("Go");
}
else{   
    console.log("Invalid color");
}  
// practice problem - price of t-shirt based on size
let size = "XL";
if(size==="XL"){
    console.log("Rs.250");
}
else if(size==="L"){
    console.log("Rs.200");
}
else if(size==="M"){
    console.log("Rs.150");
}
else if(size==="S"){
    console.log("Rs.100");
}
else{
    console.log("Invalid size");
}

// nested if example
let num = 10;
if (num > 0) {
    console.log("The number is positive.");     
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
} else {
    console.log("The number is not positive.");
}


// logical operators in if statements
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
    console.log("Login successful.");
}
if (username === "admin" || password === "1234") {
    console.log("Login successful.");
}
if (!(username === "admin")) {
    console.log("Login failed.");
}


// pratice problem - good string 
let str = "apple";
if(str.length > 3 && str[0] === "a"){
    console.log("The string is good.");
}
else{
    console.log("The string is not good.");
}

let numm = 12;
if((numm %3===0) && ((numm+1 === 15) || (numm-1 === 11))){
    console.log("The number is good.");
}
else{
    console.log("The number is not good.");
}

// truthy and falsy values
// truthy values - values that are considered true in a boolean context
// falsy values - values that are considered false in a boolean context
// falsy values in JavaScript: false, 0, "", null, undefined, NaN
let value = 0;
if (value) {
    console.log("The value is truthy.");    
} else {    
    console.log("The value is falsy."); 
}

let strr = "";
if (strr) {
    console.log("The string is truthy.");
} else {
    console.log("The string is falsy.");
}


// switch statement example
let dayy = "Tuesday";
switch (dayy) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    default:
        console.log("Invalid day.");
}

let colorrr = "green";
switch (colorrr) {
    case "red":
        console.log("Stop");
        break;      
    case "yellow":
        console.log("Get Ready");
        break;  
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
} 

let dayyy=1;
switch (dayyy) {    
    case 1:
        console.log("Today is Monday.");
        break;  
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 7:
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}

// alert and prompt
// alert - a function that displays an alert box with a specified message and an OK button
// prompt - a function that displays a dialog box that prompts the user for input
// let name = prompt("Please enter your name:");
// alert("Hello, " + name + "!");
alert("Welcome to JavaScript programming!");
 

console.log("This is a message in the console.");
console.error("This is an error message in the console.");
console.warn("This is a warning message in the console.");


let favoriteColor = prompt("What is your favorite color?");
console.log("Your favorite color is " + favoriteColor + ".");


let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
console.log("Hello, " + firstName + " " + lastName + "!");
let msg = "hello"+firstName+lastName+"!";
alert(msg);


